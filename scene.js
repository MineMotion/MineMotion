const viewport = document.getElementById('viewport');

const scene = new THREE.Scene();

const mainCamera = new THREE.PerspectiveCamera(75, viewport.clientWidth / viewport.clientHeight, 0.1, 1000);
mainCamera.position.set(3, 1.5, 3);
mainCamera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(1.3);
renderer.setSize(viewport.clientWidth, viewport.clientHeight);
viewport.appendChild(renderer.domElement);

function adjustRendererAndCamera() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  
  renderer.setSize(width, height, true);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  if (aspect > 1) {
    mainCamera.fov = 30;
  } else {
    mainCamera.fov = 70;
  }
  
  mainCamera.aspect = aspect;
  mainCamera.updateProjectionMatrix();
}

window.addEventListener("resize", adjustRendererAndCamera);
window.addEventListener("orientationchange", adjustRendererAndCamera);

adjustRendererAndCamera();

const globalLight = new THREE.AmbientLight(0xffffff, 1);
globalLight.name = 'globalLight';
globalLight.userData.exclude = true;
scene.add(globalLight);

const textureLoader = new THREE.TextureLoader();

const texture = new THREE.TextureLoader().load('textures/grass.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(100, 100);
texture.magFilter = THREE.NearestFilter;
texture.minFilter = THREE.NearestFilter;

const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshStandardMaterial({ map: texture });
const plane = new THREE.Mesh(geometry, material);

plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
plane.material.side = THREE.DoubleSide;
plane.userData.exclude = true;
plane.userData.noSeleccionable = true;

scene.add(plane);

const cloudLoader = new THREE.OBJLoader();
cloudLoader.load('models/clouds.obj', function(clouds) {
  clouds.traverse(function(child) {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        emissive: 0xffffff,
        emissiveIntensity: 0.3
      });
    }
  });
  clouds.position.set(0, -20, 0);
  clouds.userData.exclude = true;
  clouds.userData.noSeleccionable = true;
  clouds.name = 'Clouds';
  
  scene.add(clouds);
});

const controls = new THREE.OrbitControls(mainCamera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.2;
controls.screenSpacePanning = true;
controls.maxPolarAngle = Math.PI;

/* Render */
var rendering = false;
function preview() {
  rendering = !rendering;
  
  scene.traverse((child) => {
    if (child.isMesh && child.id !== "exclude" && child.name !== "Clouds") {
      child.castShadow = rendering;
      child.receiveShadow = rendering;
    }
    if (child.isLight && child.name !== "globalLight") {
      child.visible = rendering;
    }
  });
  
  renderer.shadowMap.enabled = rendering;
  document.getElementById("postprocessing").checked = rendering;
  updateEffects();
  
  renderer.render(scene, mainCamera);
  document.querySelector(".preview-button").classList.toggle("active", rendering);
}
function verifyLights() {
  const lightPreview = document.getElementById("lightPreview").checked;
  
  scene.traverse((child) => {
    if (child.isLight && child.name !== "globalLight") {
      child.castShadow = rendering;
      child.visible = lightPreview || rendering;
    }
    
    if (child.isSprite) {
      child.visible = !rendering;
      child.castShadow = false;
      child.receiveShadow = false;
    }
    
    if (child.isMesh) {
      const isInTransformControls = child.parent?.type === "TransformControls";
      const hasPreviewMaterials = child.parent?.userData?.previewMaterials;
      
      if (!isInTransformControls && !hasPreviewMaterials && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => {
            mat.transparent = rendering;
            mat.alphaTest = rendering ? 0.5 : 0;
            mat.needsUpdate = true;
          });
        } else {
          child.material.transparent = rendering;
          child.material.alphaTest = rendering ? 0.5 : 0;
          child.material.needsUpdate = true;
        }
      }
    }
  });
}
setInterval(verifyLights, 100);

function render() {
  if (document.getElementById("postprocessing").checked) {
    composer.render();
  } else {
    renderer.render(scene, mainCamera);
  }
  
  const imageData = renderer.domElement.toDataURL("image/png");
  const renderedImage = document.getElementById("renderedImage");
  
  if (renderedImage) {
    renderedImage.src = imageData;
    renderedImage.classList.add("imageOutput");
  }
}

/* Postprocessing */
let composer;
let bloomPass, aoPass;
let renderPass;

function initPostProcessing() {
  composer = new THREE.EffectComposer(renderer);
  
  renderPass = new THREE.RenderPass(scene, mainCamera);
  composer.addPass(renderPass);
  
  aoPass = new THREE.SSAOPass(scene, mainCamera, viewport.clientWidth, viewport.clientHeight);
  aoPass.kernelRadius = 1;
  aoPass.minDistance = 0.00000001;
  aoPass.maxDistance = 0.0005;
  aoPass.output = THREE.SSAOPass.OUTPUT.Default;
  aoPass.blur = true;
  aoPass.blurRadius = 4;
  aoPass.blurStdDev = 2;
  aoPass.blurDepthCutoff = 1;
  aoPass.enabled = false;
  composer.addPass(aoPass);
  
  bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.2,
    2,
    0.7
  );
  bloomPass.enabled = false;
  composer.addPass(bloomPass);
}

function updateEffects() {
  const postProcessingEnabled = document.getElementById("postprocessing").checked;
  const bloomEnabled = document.getElementById("bloom").checked;
  const aoEnabled = document.getElementById("ambientOcclusion").checked;
  
  if (!postProcessingEnabled) {
    bloomPass.enabled = false;
    aoPass.enabled = false;
  } else {
    bloomPass.enabled = bloomEnabled;
    aoPass.enabled = aoEnabled;
  }
}

initPostProcessing();

function animate() {
  requestAnimationFrame(animate);
  if (document.getElementById("postprocessing").checked) {
    composer.render();
  } else {
    renderer.render(scene, mainCamera);
  }
  controls.update();
  showActions();
  showSelectName();
  verifyLights();
  updateIk();
}
animate();