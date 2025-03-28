const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let selectedObject = null;
let originalEmissive = new THREE.Color();
let touchStartTime = 0;
let touchStartPos = new THREE.Vector2();

function onTouchStart(event) {
  if (event.touches.length > 1) return;
  
  touchStartTime = performance.now();
  touchStartPos.set(event.touches[0].clientX, event.touches[0].clientY);
}

function onTouchEnd(event) {
  if (event.changedTouches.length > 1) return;
  
  const touchDuration = performance.now() - touchStartTime;
  const touchEndPos = new THREE.Vector2(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  const movement = touchEndPos.distanceTo(touchStartPos);
  
  if (touchDuration < 200 && movement < 5) {
    selectObject(event);
  }
}

let snapToggled = false;

function selectObject(event) {
  const touch = event.changedTouches[0];
  const rect = renderer.domElement.getBoundingClientRect();
  
  pointer.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
  
  raycaster.setFromCamera(pointer, mainCamera);
  const intersections = raycaster.intersectObjects(scene.children, true);
  
  let redirectedObject = null;
  let meshSelected = null;
  let blockSelected = false;
  
  if (selectedObject) {
    if (selectedObject.children) {
      selectedObject.children.forEach(child => {
        if (child.userData.redirect) {
          child.material.color.set(0xffffff);
        }
      });
    }
    if (selectedObject.material && selectedObject.material.emissive) {
      selectedObject.material.emissive.set(originalEmissive.getHex());
    }
    
    if (snapToggled) {
      document.getElementById("snap").click();
      snapToggled = false;
    }
    
    selectedObject = null;
    attachTransformControls(null);
  }
  
  for (let i = 0; i < intersections.length; i++) {
    let object = intersections[i].object;
    
    // Verifica si el objeto o alguno de sus padres está oculto
    let hidden = false;
    let parent = object;
    while (parent) {
      if (!parent.visible) {
        hidden = true;
        break;
      }
      parent = parent.parent;
    }
    if (hidden || object.userData.noSeleccionable) continue;
    
    if (object.userData.redirect && object.parent) {
      redirectedObject = object.parent;
      break;
    } else if (object.userData.block) {
      blockSelected = true;
      meshSelected = object;
      break;
    } else if (object.userData.targetCube) { // Permite seleccionar targetCube
      meshSelected = object;
      break;
    } else if (object.parent && object.material?.emissive) {
      if (!meshSelected) meshSelected = object;
    }
  }
  
  selectedObject = redirectedObject || meshSelected;
  
  if (selectedObject) {
    if (selectedObject.children) {
      selectedObject.children.forEach(child => {
        if (child.userData.redirect) {
          child.material.color.set(0xffa500);
        }
      });
    }
    if (selectedObject.material?.emissive) {
      originalEmissive.set(selectedObject.material.emissive.getHex());
      selectedObject.material.emissive.set(0xffffff).multiplyScalar(0.1);
    }
    
    attachTransformControls(selectedObject);
    
    if (autoSnap && blockSelected && !snapEnabled) {
      document.getElementById("snap").click();
      snapToggled = true;
    }
  }
  
  saveState('select');
  showActions();
  updateVisualKeyframes();
  updateLightUI();
  showInterpolation();
}

renderer.domElement.addEventListener("touchstart", onTouchStart);
renderer.domElement.addEventListener("touchend", onTouchEnd);

let isCollectionModeActive = false;
let collectionModeInterval = null;

function collectionMode() {
  isCollectionModeActive = !isCollectionModeActive;
  const button = document.querySelector('.collection-button');
  
  if (isCollectionModeActive) {
    collectionModeInterval = setInterval(updateSelection, 1);
    if (button) button.classList.add('active');
  } else {
    clearInterval(collectionModeInterval);
    collectionModeInterval = null;
    if (button) button.classList.remove('active');
  }
}

function updateSelection() {
  if (!selectedObject) return;
  
  if (isCollectionModeActive) {
    while (selectedObject.parent && selectedObject.parent !== scene) {
      selectedObject = selectedObject.parent;
    }
  }
  
  scene.traverse((child) => {
    if (child !== selectedObject) {
      if (child.material && child.material.emissive) {
        child.material.emissive.setHex(child.userData.originalEmissive || 0x000000);
      }
      if (child.userData.redirect) {
        child.material.color.set(0xffffff);
      }
    }
  });
  
  if (!isCollectionModeActive || selectedObject.parent === scene) {
    attachTransformControls(selectedObject);
  }
}