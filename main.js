document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu").forEach(menu => {
    const button = document.createElement("button");
    button.className = "x";
    button.setAttribute("onclick", "hide()");
    
    const img = document.createElement("img");
    img.src = "icons/Close.png";
    
    button.appendChild(img);
    menu.appendChild(button);
  });
});

function hide() {
  document.querySelectorAll('.menu, .overlay').forEach(el => {
    if (el.offsetParent !== null) {
      el.style.display = 'none';
    }
  });
}

function toggle(id) {
  const element = document.getElementById(id);
  const isVisible = element && window.getComputedStyle(element).display === "block";
  
  document.querySelectorAll('.menu').forEach(menu => {
    menu.style.display = "none";
  });
  
  if (element && !isVisible) {
    element.style.display = "block";
  }
}
function overlay() {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'block';
}

function toggleOutliner() {
  const outliner = document.querySelector('.outliner');
  const outlineButton = document.querySelector('.outliner-button');
  
  if (outliner.style.display === 'none' || !outliner.style.display) {
    outliner.style.display = 'block';
    outlineButton.classList.add('active');
  } else {
    outliner.style.display = 'none';
    outlineButton.classList.remove('active');
  }
}

const pickr = Pickr.create({
  el: "#colorPicker",
  theme: "nano",
  default: "#ffffff",
  swatches: null,
  components: {
    preview: false,
    opacity: false,
    hue: true,
    interaction: {
      input: true,
      save: true
    }
  }
});
const lightColorPicker = Pickr.create({
  el: '#lightColor',
  theme: 'nano',
  default: '#ffffff',
  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      input: true,
      save: true
    }
  }
});

function addBoneMarkers() {
  const textureLoader = new THREE.TextureLoader();
  
  const markers = [];
  
  scene.traverse((object) => {
    if (object.isBone) {
      if (!object.children.some(child => child.isSprite)) {
        const boneTexture = textureLoader.load("icons/Bone.png", (texture) => {
          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;
        });
        
        const boneMaterial = new THREE.SpriteMaterial({
          map: boneTexture,
          depthTest: false
        });
        
        const marker = new THREE.Sprite(boneMaterial);
        marker.userData.redirect = true;
        object.add(marker);
        markers.push({ marker, bone: object });
        
        object.geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        object.geometry.computeBoundingBox();
        object.geometry.boundingBox.expandByScalar(0.5);
      }
    }
  });
  
  function updateMarkerScales() {
    const scaleFactor = 0.05;
    scene.traverse((object) => {
      if (object.isSprite) {
        const distance = mainCamera.position.distanceTo(object.getWorldPosition(new THREE.Vector3()));
        object.scale.setScalar(distance * scaleFactor);
      }
    });
  }
  
  renderer.setAnimationLoop(updateMarkerScales);
}
function addLightMarkers() {
  const textureLoader = new THREE.TextureLoader();
  
  const lightIcons = {
    PointLight: "icons/point.png",
    DirectionalLight: "icons/sun.png",
    SpotLight: "icons/spot.png"
  };
  
  const markers = [];
  
  scene.traverse((object) => {
    if (object.isLight && lightIcons[object.type]) {
      if (!object.children.some(child => child.isSprite)) {
        const lightTexture = textureLoader.load(lightIcons[object.type], (texture) => {
          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;
        });
        
        const lightMaterial = new THREE.SpriteMaterial({
          map: lightTexture,
          depthTest: false
        });
        
        const marker = new THREE.Sprite(lightMaterial);
        marker.userData.redirect = true;
        object.add(marker);
        markers.push({ marker, light: object });
      }
    }
  });
  
  function updateMarkerScales() {
    const scaleFactor = 0.07;
    scene.traverse((object) => {
      if (object.isSprite) {
        const distance = mainCamera.position.distanceTo(object.getWorldPosition(new THREE.Vector3()));
        object.scale.setScalar(distance * scaleFactor);
      }
    });
  }
  
  renderer.setAnimationLoop(updateMarkerScales);
}