let ikSystems = [];
const tempVector = new THREE.Vector3();
const tempQuaternion = new THREE.Quaternion();

function setEffector() {
  if (!selectedObject || !selectedObject.isBone) return;
  selectedObject.userData.effector = true;
  
  const effectorBone = selectedObject;
  const rootBone = effectorBone.parent?.parent;
  if (!rootBone) return;
  
  let ikTarget = scene.getObjectByName(`ikTarget_${selectedObject.uuid}`);
  
  if (!ikTarget) {
    ikTarget = new THREE.Bone();
    ikTarget.name = `ikTarget_${selectedObject.uuid}`;
    ikTarget.position.copy(effectorBone.getWorldPosition(tempVector));
    ikTarget.userData.ikTarget = true;
    ikTarget.chainId = selectedObject.uuid;
    scene.add(ikTarget);
  }
  
  effectorBone.visible = false;
  setupIKSolver(rootBone, effectorBone, ikTarget);
  addBoneMarkers();
}

function setupIKSolver(rootBone, effectorBone, ikTarget) {
  const bones = [];
  rootBone.traverse(b => bones.push(b));
  
  const effectorIndex = bones.indexOf(effectorBone);
  const links = [];
  let current = effectorBone.parent;
  
  while (current && current !== rootBone.parent) {
    links.push({ index: bones.indexOf(current) });
    current = current.parent;
  }
  links.reverse();
  
  bones.push(ikTarget);
  const targetIndex = bones.length - 1;
  
  // Configuración del solver
  const solver = new THREE.CCDIKSolver({ skeleton: { bones } }, [{
    target: targetIndex,
    effector: effectorIndex,
    links: links
  }]);
  
  solver.iteration = 500000;
  solver.tolerance = -10000;
  
  ikSystems.push({
    solver: solver,
    rootBone: rootBone,
    effectorBone: effectorBone,
    kneeBone: effectorBone.parent,
    target: ikTarget
  });
  
  correctKneeOrientation(effectorBone.parent, rootBone, effectorBone);
}

function getCardinalDirection() {
  const cameraDirection = mainCamera.getWorldDirection(tempVector);
  
  cameraDirection.y = 0;
  cameraDirection.normalize();
  
  const directions = {
    N: new THREE.Vector3(0, 0, -1),
    S: new THREE.Vector3(0, 0, 1),
    E: new THREE.Vector3(1, 0, 0),
    W: new THREE.Vector3(-1, 0, 0)
  };
  
  let bestMatch = "N";
  let maxDot = -Infinity;
  
  for (const dir in directions) {
    const dot = cameraDirection.dot(directions[dir]);
    if (dot > maxDot) {
      maxDot = dot;
      bestMatch = dir;
    }
  }
  
  return directions[bestMatch];
}

function correctKneeOrientation(kneeBone, rootBone, effectorBone) {
  const rootPos = rootBone.getWorldPosition(new THREE.Vector3());
  const kneePos = kneeBone.getWorldPosition(new THREE.Vector3());
  const effectorPos = effectorBone.getWorldPosition(new THREE.Vector3());
  
  const preferredDirection = getCardinalDirection();
  const currentDirection = tempVector.subVectors(effectorPos, kneePos).normalize();
  
  const correctionAxis = tempVector.crossVectors(currentDirection, preferredDirection).normalize();
  const angle = Math.acos(currentDirection.dot(preferredDirection));
  
  if (correctionAxis.lengthSq() > 0.0001) {
    kneeBone.quaternion.premultiply(tempQuaternion.setFromAxisAngle(correctionAxis, angle));
  }
}

function applyConstraints(chain) {
  if (!chain.kneeBone) return;
  const euler = new THREE.Euler().setFromQuaternion(chain.kneeBone.quaternion, "XYZ");
  
  // Limitamos el movimiento en un solo eje
  euler.y = 0;
  euler.z = 0;
  chain.kneeBone.quaternion.setFromEuler(euler);
}

function updateIk() {
  for (const chain of ikSystems) {
    chain.solver.update();
    applyConstraints(chain);
  }
}

/* Constraints */
function setRotMin() {
  if (!selectedObject) return;
  selectedObject.userData.rotMin = selectedObject.rotation.clone();
  document.getElementById("rotMin").textContent =
    "Min: (" +
    selectedObject.userData.rotMin.x.toFixed(2) + ", " +
    selectedObject.userData.rotMin.y.toFixed(2) + ", " +
    selectedObject.userData.rotMin.z.toFixed(2) + ")";
}
function setRotMax() {
  if (!selectedObject) return;
  selectedObject.userData.rotMax = selectedObject.rotation.clone();
  document.getElementById("rotMax").textContent =
    "Max: (" +
    selectedObject.userData.rotMax.x.toFixed(2) + ", " +
    selectedObject.userData.rotMax.y.toFixed(2) + ", " +
    selectedObject.userData.rotMax.z.toFixed(2) + ")";
}

function setPosMin() {
  if (!selectedObject) return;
  selectedObject.userData.posMin = {
    x: selectedObject.position.x,
    y: selectedObject.position.y,
    z: selectedObject.position.z
  };
  document.getElementById("posMin").textContent = `Min: ${selectedObject.position.x.toFixed(2)}, ${selectedObject.position.y.toFixed(2)}, ${selectedObject.position.z.toFixed(2)}`;
}
function setPosMax() {
  if (!selectedObject) return;
  selectedObject.userData.posMax = {
    x: selectedObject.position.x,
    y: selectedObject.position.y,
    z: selectedObject.position.z
  };
  document.getElementById("posMax").textContent = `Max: ${selectedObject.position.x.toFixed(2)}, ${selectedObject.position.y.toFixed(2)}, ${selectedObject.position.z.toFixed(2)}`;
}

function setScaleMin() {
  if (!selectedObject) return;
  selectedObject.userData.scaleMin = {
    x: selectedObject.scale.x,
    y: selectedObject.scale.y,
    z: selectedObject.scale.z
  };
  document.getElementById("scaleMin").textContent = `Min: ${selectedObject.scale.x.toFixed(2)}, ${selectedObject.scale.y.toFixed(2)}, ${selectedObject.scale.z.toFixed(2)}`;
}
function setScaleMax() {
  if (!selectedObject) return;
  selectedObject.userData.scaleMax = {
    x: selectedObject.scale.x,
    y: selectedObject.scale.y,
    z: selectedObject.scale.z
  };
  document.getElementById("scaleMax").textContent = `Max: ${selectedObject.scale.x.toFixed(2)}, ${selectedObject.scale.y.toFixed(2)}, ${selectedObject.scale.z.toFixed(2)}`;
}

function updateConstraints() {
  if (!selectedObject) return;
  
  // Restringir Rotación
  if (selectedObject.userData.rotMin && selectedObject.userData.rotMax) {
    const minRot = selectedObject.userData.rotMin;
    const maxRot = selectedObject.userData.rotMax;
    selectedObject.rotation.x = Math.min(Math.max(selectedObject.rotation.x, minRot.x), maxRot.x);
    selectedObject.rotation.y = Math.min(Math.max(selectedObject.rotation.y, minRot.y), maxRot.y);
    selectedObject.rotation.z = Math.min(Math.max(selectedObject.rotation.z, minRot.z), maxRot.z);
  }
  
  // Restringir Posición
  if (selectedObject.userData.posMin && selectedObject.userData.posMax) {
    const minPos = selectedObject.userData.posMin;
    const maxPos = selectedObject.userData.posMax;
    selectedObject.position.x = Math.min(Math.max(selectedObject.position.x, minPos.x), maxPos.x);
    selectedObject.position.y = Math.min(Math.max(selectedObject.position.y, minPos.y), maxPos.y);
    selectedObject.position.z = Math.min(Math.max(selectedObject.position.z, minPos.z), maxPos.z);
  }
  
  // Restringir Escala
  if (selectedObject.userData.scaleMin && selectedObject.userData.scaleMax) {
    const minScale = selectedObject.userData.scaleMin;
    const maxScale = selectedObject.userData.scaleMax;
    selectedObject.scale.x = Math.min(Math.max(selectedObject.scale.x, minScale.x), maxScale.x);
    selectedObject.scale.y = Math.min(Math.max(selectedObject.scale.y, minScale.y), maxScale.y);
    selectedObject.scale.z = Math.min(Math.max(selectedObject.scale.z, minScale.z), maxScale.z);
  }
}