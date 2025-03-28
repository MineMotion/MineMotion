let undoStack = [], redoStack = [];
const undoBtn = document.getElementById('undo');
const redoBtn = document.getElementById('redo');
const loader = new THREE.ObjectLoader();

// Sistema general de undo/redo
function saveState(action) {
    if (!selectedObject) return;
    const state = {
        action,
        uuid: selectedObject.uuid,
        parentUuid: selectedObject.parent ? selectedObject.parent.uuid : null,
        json: selectedObject.toJSON(),
        visible: selectedObject.visible
    };
    if (action === 'transform') {
        const lastState = undoStack[undoStack.length - 1];
        if (lastState && lastState.action === 'transform' && JSON.stringify(lastState.json) === JSON.stringify(state.json)) {
            return;
        }
    }
    undoStack.push(state);
    redoStack = [];
}

function applyState(state) {
    let object = scene.getObjectByProperty('uuid', state.uuid);
    if (object) {
        const newObject = loader.parse(state.json);
        object.position.copy(newObject.position);
        object.rotation.copy(newObject.rotation);
        object.scale.copy(newObject.scale);
        object.userData = { ...newObject.userData };
        object.visible = state.visible;
    } else {
        const loadedObject = loader.parse(state.json);
        const parent = state.parentUuid ? scene.getObjectByProperty('uuid', state.parentUuid) : scene;
        parent.add(loadedObject);
        selectedObject = loadedObject;
        attachTransformControls(loadedObject);
    }
}

function undo() {
    if (undoStack.length === 0) return;
    const lastAction = undoStack.pop();
    redoStack.push(lastAction);
    
    if (lastAction.action === 'delete') {
        applyState(lastAction);
        selectedObject = scene.getObjectByProperty('uuid', lastAction.uuid);
        attachTransformControls(selectedObject);
    } else if (lastAction.action === 'transform') {
        const prevState = undoStack[undoStack.length - 1];
        if (prevState) applyState(prevState);
    } else if (lastAction.action === 'copy') {
        const clone = scene.getObjectByProperty('uuid', lastAction.uuid);
        if (clone) {
            clone.parent.remove(clone);
            selectedObject = null;
            attachTransformControls(null);
        }
    } else if (lastAction.action === 'hide') {
        const object = scene.getObjectByProperty('uuid', lastAction.uuid);
        if (object) object.visible = lastAction.visible;
    } else if (lastAction.action === 'addKeyframe' || lastAction.action === 'removeKeyframe') {
        const objectId = lastAction.uuid;
        const frame = lastAction.frame;
        if (lastAction.action === 'addKeyframe') {
            // Undo add: eliminar el keyframe agregado
            delete keyframes[objectId][frame];
            updateVisualKeyframes();
        } else if (lastAction.action === 'removeKeyframe') {
            // Undo remove: restaurar el keyframe eliminado
            keyframes[objectId][frame] = lastAction.keyframeData;
            updateVisualKeyframes();
        }
    }
}

function redo() {
    if (redoStack.length === 0) return;
    const lastAction = redoStack.pop();
    undoStack.push(lastAction);
    
    if (lastAction.action === 'delete') {
        const object = scene.getObjectByProperty('uuid', lastAction.uuid);
        if (object) {
            object.parent.remove(object);
            selectedObject = null;
            attachTransformControls(null);
        }
    } else if (lastAction.action === 'transform') {
        applyState(lastAction);
    } else if (lastAction.action === 'copy') {
        applyState(lastAction);
        selectedObject = scene.getObjectByProperty('uuid', lastAction.uuid);
        attachTransformControls(selectedObject);
    } else if (lastAction.action === 'hide') {
        const object = scene.getObjectByProperty('uuid', lastAction.uuid);
        if (object) object.visible = !lastAction.visible;
    } else if (lastAction.action === 'addKeyframe' || lastAction.action === 'removeKeyframe') {
        const objectId = lastAction.uuid;
        const frame = lastAction.frame;
        if (lastAction.action === 'addKeyframe') {
            // Redo add: volver a agregar el keyframe
            keyframes[objectId][frame] = lastAction.keyframeData;
            updateVisualKeyframes();
        } else if (lastAction.action === 'removeKeyframe') {
            // Redo remove: volver a eliminar el keyframe
            delete keyframes[objectId][frame];
            updateVisualKeyframes();
        }
    }
}

undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);
transformControls.addEventListener('mouseUp', () => saveState('transform'));