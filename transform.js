const transformControls = new THREE.TransformControls(mainCamera, renderer.domElement);
scene.add(transformControls);

transformControls.userData.exclude = true;
transformControls.traverse(child => {
  child.userData.previewMaterials = true;
  child.userData.noSeleccionable = true;
});

transformControls.addEventListener('mouseDown', () => {
  controls.enabled = false;
});

transformControls.addEventListener('mouseUp', () => {
  controls.enabled = true;
});

function attachTransformControls(object) {
  if (object) {
    transformControls.attach(object);
  } else {
    transformControls.detach();
  }
}

const posButton = document.getElementById("pos");
const rotButton = document.getElementById("rot");
const sclButton = document.getElementById("scl");

function updateMode(mode) {
  transformControls.setMode(mode);
  
  posButton.style.color = mode === "translate" ? "orange" : "";
  rotButton.style.color = mode === "rotate" ? "orange" : "";
  sclButton.style.color = mode === "scale" ? "orange" : "";
}

posButton.addEventListener("click", () => updateMode("translate"));
rotButton.addEventListener("click", () => updateMode("rotate"));
sclButton.addEventListener("click", () => updateMode("scale"));

const spaceButton = document.getElementById("space");
transformControls.setSpace("local");
spaceButton.textContent = "Local";

spaceButton.addEventListener("click", () => {
  if (transformControls.space === "local") {
    transformControls.setSpace("world");
    spaceButton.textContent = "Global";
  } else {
    transformControls.setSpace("local");
    spaceButton.textContent = "Local";
  }
});

transformControls.addEventListener('objectChange', () => {
  updateConstraints();
});