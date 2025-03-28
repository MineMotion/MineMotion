const outlinerContainer = document.querySelector('.outliner');
let selectedOutlinerItem = null;
const collapseStates = new Map();
let isEditingName = false; // Bandera para pausar la actualización
let previousSelectedObject = null; // Guarda el objeto previamente seleccionado

function updateOutliner() {
  if (isEditingName) return;
  outlinerContainer.innerHTML = '';
  
  function addObjectToOutliner(object, level = 0, parentContainer = outlinerContainer) {
    if (
      object === scene ||
      object.type === 'Camera' ||
      object.type === 'Sprite' ||
      (object.type === 'Light' && object.isAmbientLight) ||
      object.name === 'transformControls' ||
      object.userData.exclude === true
    ) {
      return;
    }
    
    const item = document.createElement('div');
    item.classList.add('outliner-item');
    item.dataset.uuid = object.uuid;
    item.textContent = object.name || 'Unnamed Object';
    item.style.marginLeft = `${level * 10}px`;
    item.draggable = true;
    item.style.color = object.visible ? 'white' : 'gray';
    parentContainer.appendChild(item);
    
    item.addEventListener('dblclick', () => editObjectName(object, item));
    
    item.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', object.uuid);
      item.style.opacity = '0.5';
    });
    
    item.addEventListener('dragend', () => {
      item.style.opacity = '1';
    });
    
    item.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    
    item.addEventListener('drop', (event) => {
      event.preventDefault();
      const draggedUuid = event.dataTransfer.getData('text/plain');
      const draggedObject = scene.getObjectByProperty('uuid', draggedUuid);
      
      if (draggedObject && draggedObject !== object && !object.children.includes(draggedObject)) {
        reparentObject(draggedObject, object);
        updateOutliner();
      }
    });
    
    const validChildren = object.children.filter(child =>
      child.type !== 'Camera' &&
      child.type !== 'Sprite' &&
      !(child.type === 'Light' && child.isAmbientLight) &&
      child.name !== 'transformControls' &&
      child.userData.exclude !== true
    );
    
    if (validChildren.length > 0) {
      const collapseButton = document.createElement('button');
      collapseButton.classList.add('collapse');
      collapseButton.textContent = '▶';
      item.prepend(collapseButton);
      
      const childContainer = document.createElement('div');
      childContainer.classList.add('child-container');
      parentContainer.appendChild(childContainer);
      
      if (!collapseStates.has(object.uuid)) {
        collapseStates.set(object.uuid, true);
      }
      
      if (collapseStates.get(object.uuid)) {
        childContainer.style.display = 'none';
        collapseButton.style.transform = 'rotate(0deg)';
      } else {
        childContainer.style.display = 'block';
        collapseButton.style.transform = 'rotate(90deg)';
      }
      
      collapseButton.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleCollapse(object.uuid, childContainer, collapseButton);
      });
      
      validChildren.forEach(child => addObjectToOutliner(child, level + 1, childContainer));
    }
    
    item.addEventListener('click', (event) => {
      if (!event.target.classList.contains('collapse')) {
        handleObjectSelection(object, item);
      }
    });
  }
  
  scene.children.forEach(object => addObjectToOutliner(object));
  applySelectionHighlighting();
}

function editObjectName(object, item) {
  if (isEditingName) return;
  isEditingName = true;
  
  const input = document.createElement('input');
  input.type = 'text';
  input.value = object.name || 'Unnamed Object';
  input.classList.add('outliner-edit');
  item.textContent = '';
  item.appendChild(input);
  input.focus();
  input.select();
  
  input.addEventListener('blur', () => {
    setObjectName(object, input.value.trim() || 'Unnamed Object', item);
  });
  
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      input.blur();
    } else if (event.key === 'Escape') {
      isEditingName = false;
      item.textContent = object.name;
    }
  });
}

function setObjectName(object, newName, item) {
  object.name = newName;
  item.textContent = newName;
  isEditingName = false;
}

function handleObjectSelection(object, item) {
  if (selectedObject !== object) {
    restorePreviousEmissive(); // Restaura el objeto anterior antes de seleccionar uno nuevo
  }
  
  selectedObject = object;
  
  if (selectedObject.material && selectedObject.material.emissive) {
    selectedObject.userData.originalEmissive ??= selectedObject.material.emissive.getHex();
    selectedObject.material.emissive.setHex(0x151515);
  }
  
  attachTransformControls(selectedObject);
  applySelectionHighlighting();
}

function restorePreviousEmissive() {
  if (previousSelectedObject && previousSelectedObject.material && previousSelectedObject.material.emissive) {
    previousSelectedObject.material.emissive.setHex(previousSelectedObject.userData.originalEmissive || 0x000000);
  }
  previousSelectedObject = selectedObject; // Guarda el objeto seleccionado como el anterior
}

function applySelectionHighlighting() {
  document.querySelectorAll('.outliner-item').forEach(el => {
    const object = scene.getObjectByProperty('uuid', el.dataset.uuid);
    el.style.backgroundColor = '';
    el.style.color = object && !object.visible ? 'gray' : 'white';
  });
  
  if (selectedObject) {
    const selectedItem = document.querySelector(`.outliner-item[data-uuid="${selectedObject.uuid}"]`);
    if (selectedItem) selectedItem.style.backgroundColor = '#5ECCFFDE';
    
    let parent = selectedObject.parent;
    while (parent && parent !== scene) {
      const parentItem = document.querySelector(`.outliner-item[data-uuid="${parent.uuid}"]`);
      if (parentItem) parentItem.style.backgroundColor = '#274959C2';
      parent = parent.parent;
    }
  }
}

function toggleCollapse(uuid, childContainer, button) {
  const isVisible = childContainer.style.display !== 'none';
  collapseStates.set(uuid, isVisible);
  childContainer.style.display = isVisible ? 'none' : 'block';
  button.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
}

function reparentObject(object, newParent) {
  const worldPosition = new THREE.Vector3();
  const worldRotation = new THREE.Quaternion();
  const worldScale = new THREE.Vector3();
  
  object.getWorldPosition(worldPosition);
  object.getWorldQuaternion(worldRotation);
  object.getWorldScale(worldScale);
  
  newParent.add(object);
  
  object.position.set(0, 0, 0);
  object.quaternion.identity();
  object.scale.set(1, 1, 1);
  
  object.parent.worldToLocal(worldPosition);
  object.position.copy(worldPosition);
  object.setRotationFromQuaternion(worldRotation);
  object.scale.copy(worldScale);
}

outlinerContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
});

outlinerContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  const draggedUuid = event.dataTransfer.getData('text/plain');
  const draggedObject = scene.getObjectByProperty('uuid', draggedUuid);
  
  if (draggedObject && draggedObject.parent !== scene) {
    reparentObject(draggedObject, scene);
    updateOutliner();
  }
});

// Mantener la actualización activa sin interferir con la edición
setInterval(updateOutliner, 100);