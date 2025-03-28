function showActions() {
  const actions = document.querySelector(".actions");
  const editButton = document.querySelector(".edit-button");
  const editMenus = document.querySelectorAll(".edit-menu"); 
  
  const display = selectedObject ? "flex" : "none";
  actions.style.display = display;
  editButton.style.display = display;
  
  if (editButton.style.display === "none") {
    editMenus.forEach(menu => menu.style.display = "none");
  }
}
function showSelectName() {
  const objectNameElement = document.querySelector(".objectName");
  
  if (selectedObject) {
    objectNameElement.style.display = "inline";
    objectNameElement.textContent = selectedObject.name || "Null";
  } else {
    objectNameElement.style.display = "none";
    objectNameElement.textContent = "";
  }
}

function editMenu() {
  const boneMenu = document.getElementById("boneMenu");
  const lightMenu = document.getElementById("lightMenu");
  const blockMenu = document.getElementById("blockMenu");
  const meshMenu = document.getElementById("meshMenu");
  
  boneMenu.style.display = "none";
  lightMenu.style.display = "none";
  blockMenu.style.display = "none";
  meshMenu.style.display = "none";
  
  if (!selectedObject) return;
  
  if (selectedObject.type === "Bone") {
    boneMenu.style.display = "block";
  } else if (selectedObject.type.includes("Light")) {
    lightMenu.style.display = "block";
  } else if (selectedObject.userData?.block) {
    blockMenu.style.display = "block";
  } else {
    meshMenu.style.display = "block";
  }
}

function deleteObject() {
  if (!selectedObject) return;
  saveState('delete');
  selectedObject.parent.remove(selectedObject);
  selectedObject = null;
  attachTransformControls(null);
}
function copyObject() {
  if (!selectedObject) return;
  const clone = selectedObject.clone();
  if (selectedObject.parent && selectedObject.parent !== scene) {
    selectedObject.parent.add(clone);
  } else {
    scene.add(clone);
  }
  selectedObject = clone;
  attachTransformControls(selectedObject);
  saveState('copy');
}
function hideObject() {
  if (!selectedObject) return;
  saveState('hide');
  selectedObject.visible = !selectedObject.visible;
}