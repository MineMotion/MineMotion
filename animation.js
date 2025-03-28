let totalFrames = 250;
const framesContainer = document.querySelector('.frames-container');
const playPauseButton = document.getElementById("playPause");
const timeline = document.querySelector(".timeline");
const cursor = document.querySelector(".cursor");
const frameInput = document.getElementById("currentFrame");
const rewindButton = document.getElementById("rewind");
const forwardButton = document.getElementById("forward");
const keyframeButton = document.querySelector("#addKeyframe");
const keyframeIcon = keyframeButton.querySelector("img");

let isPlaying = false;
let currentFrame = 0;
let frameWidth = 15;
let animationInterval = null;
let keyframes = {};
let lastFrameValues = {};

for (let i = 0; i < totalFrames; i++) {
  const frame = document.createElement('div');
  frame.classList.add('frame');
  frame.style.left = `${i * frameWidth}px`;
  framesContainer.appendChild(frame);
}

function interpolateWithSpline(frames, keyframes, frame) {
  if (frames.length < 2) return keyframes[frames[0]].position.clone();
  
  const points = frames.map(f => keyframes[f].position);
  const curve = new THREE.CatmullRomCurve3(points, false, "centripetal");
  
  const t = (frame - frames[0]) / (frames[frames.length - 1] - frames[0]);
  const easedT = easeInOut(t); // Aplicar Ease In Out
  
  return curve.getPoint(easedT);
}
function easeInOut(t) {
  return t * t * (3 - 2 * t);
}
function interpolateRotation(prev, next, t) {
  const easedT = easeInOut(t);
  return new THREE.Quaternion().copy(prev).slerp(next, easedT);
}
function updateInterpolation() {
  Object.keys(keyframes).forEach(objectId => {
    const obj = scene.getObjectByProperty("uuid", objectId);
    if (!obj) return;

    const objKeyframes = keyframes[objectId];
    const frames = Object.keys(objKeyframes).map(Number).sort((a, b) => a - b);
    if (frames.length === 0) return;

    let prevFrame = null, nextFrame = null;

    for (let i = 0; i < frames.length; i++) {
      if (frames[i] <= currentFrame) prevFrame = frames[i];
      if (frames[i] > currentFrame) {
        nextFrame = frames[i];
        break;
      }
    }

    if (prevFrame !== null && nextFrame !== null) {
      const t = (currentFrame - prevFrame) / (nextFrame - prevFrame);
      const prev = objKeyframes[prevFrame];
      const next = objKeyframes[nextFrame];

      // Cacheo para evitar cálculos redundantes
      if (lastFrameValues[objectId]?.frame !== currentFrame) {
        const interpolatedPosition = interpolateWithSpline(frames, objKeyframes, currentFrame);
        const interpolatedRotation = interpolateRotation(prev.rotation, next.rotation, t);
        const interpolatedScale = interpolateScale(prev.scale, next.scale, t);

        obj.position.copy(interpolatedPosition);
        obj.quaternion.copy(interpolatedRotation);
        obj.scale.copy(interpolatedScale);

        lastFrameValues[objectId] = {
          frame: currentFrame,
          position: interpolatedPosition.clone(),
          rotation: interpolatedRotation.clone(),
          scale: interpolatedScale.clone()
        };
      }
    } else if (prevFrame !== null) {
      const prev = objKeyframes[prevFrame];
      obj.position.copy(prev.position);
      obj.quaternion.copy(prev.rotation);
      obj.scale.copy(prev.scale);
    } else if (lastFrameValues[objectId]) {
      obj.position.copy(lastFrameValues[objectId].position);
      obj.quaternion.copy(lastFrameValues[objectId].rotation);
      obj.scale.copy(lastFrameValues[objectId].scale);
    }
  });
}
function interpolateScale(prev, next, t) {
  return new THREE.Vector3().copy(prev).lerp(next, t);
}

function updateCursor() {
  cursor.style.transform = `translateX(${currentFrame * frameWidth}px)`;
  frameInput.value = currentFrame;
  updateInterpolation();
  updateKeyframeButtonIcon();
  
}
let lastTime = 0;
function play() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playPauseButton.innerHTML = '<img src="icons/pause.png" alt="Pause">';
    startTime = null;
    requestAnimationFrame(playAnimation);
  } else {
    playPauseButton.innerHTML = '<img src="icons/play.png" alt="Play">';
  }
}
function playAnimation(timestamp) {
  if (!isPlaying) return;
  
  if (startTime === null) startTime = timestamp;
  
  const elapsed = timestamp - startTime;
  const totalDuration = (totalFrames / 30) * 1000; // 30 FPS en ms
  const progress = (elapsed % totalDuration) / totalDuration;
  
  currentFrame = Math.floor(progress * totalFrames);
  updateCursor();
  updateIk();
  
  requestAnimationFrame(playAnimation);
}
function selectCurrentFrame(event) {
  const clickX = event.clientX - timeline.getBoundingClientRect().left + timeline.scrollLeft;
  currentFrame = Math.max(0, Math.min(totalFrames - 1, Math.round(clickX / frameWidth)));
  updateCursor();
}
function updateFrameFromInput() {
  const newFrame = parseInt(frameInput.value);
  if (!isNaN(newFrame) && newFrame >= 0 && newFrame < totalFrames) {
    currentFrame = newFrame;
    updateCursor();
  }
}
function updateKeyframeButtonIcon() {
  if (!selectedObject) return;
  const objectId = selectedObject.uuid;
  keyframeIcon.src = (keyframes[objectId] && keyframes[objectId][currentFrame]) ? "icons/deleteKeyframe.png" : "icons/addKeyframe.png";
}
function updateVisualKeyframes() {
  document.querySelectorAll(".keyframe").forEach(el => el.remove());
  if (!selectedObject) return;

  const objectId = selectedObject.uuid;
  if (!keyframes[objectId]) return;

  Object.keys(keyframes[objectId]).forEach(frame => {
    const keyframeMarker = document.createElement("div");
    keyframeMarker.classList.add("keyframe");
    keyframeMarker.style.left = `${frame * frameWidth}px`;
    keyframeMarker.dataset.frame = frame;
    framesContainer.appendChild(keyframeMarker);
  });
}
function onSelectionChange() {
  updateVisualKeyframes();
  updateKeyframeButtonIcon();
}


// Event Listeners
document.addEventListener("selectionChanged", onSelectionChange);
rewindButton.addEventListener("click", rewind);
forwardButton.addEventListener("click", forward);
playPauseButton.addEventListener("click", play);
timeline.addEventListener("click", selectCurrentFrame);
frameInput.addEventListener("change", updateFrameFromInput);
keyframeButton.addEventListener("click", addOrRemoveKeyframe);
timeline.addEventListener("mousemove", updateKeyframeButtonIcon);
transformControls.addEventListener('mouseUp', () => {
  const autokeyCheckbox = document.getElementById('autokeyEnabled');
  if (autokeyCheckbox && autokeyCheckbox.checked) {
    addOrRemoveKeyframe();
  }
});

updateCursor();
updateVisualKeyframes();

/* Extra functions */
// Drag Cursor
let isDragging = false;
let startX = 0;
let startFrame = 0;
function startDrag(event) {
  isDragging = true;
  startX = event.touches ? event.touches[0].clientX : event.clientX;
  startFrame = currentFrame;
  
  // Evita el desplazamiento de la línea de tiempo
  timeline.style.overflowX = "hidden";
  
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag, { passive: false });
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
}
function onDrag(event) {
  if (!isDragging) return;
  
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const deltaX = clientX - startX;
  const frameDelta = Math.round(deltaX / frameWidth);
  currentFrame = Math.max(0, Math.min(totalFrames - 1, startFrame + frameDelta));
  
  updateCursor();
  
  // Evita el scroll mientras se arrastra
  event.preventDefault();
}
function stopDrag() {
  isDragging = false;
  
  // Restaura el scroll de la línea de tiempo
  timeline.style.overflowX = "";
  
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchend", stopDrag);
}
cursor.addEventListener("mousedown", startDrag);
cursor.addEventListener("touchstart", startDrag, { passive: false });

// select Keyframe
let isSelecting = false;
let selectedKeyframes = new Set();

function selectKeyframes(event) {
  if (event.button !== 0) return;
  isSelecting = true;
  
  document.addEventListener("mouseup", () => isSelecting = false, { once: true });
}

function toggleKeyframeSelection(frameElement, frame) {
  if (!isSelecting) return;
  
  if (selectedKeyframes.has(frame)) {
    selectedKeyframes.delete(frame);
    frameElement.style.backgroundColor = "";
  } else {
    selectedKeyframes.add(frame);
    frameElement.style.backgroundColor = "cyan";
  }
}

document.querySelectorAll(".keyframe").forEach(frameElement => {
  frameElement.addEventListener("mousedown", selectKeyframes);
  frameElement.addEventListener("mouseenter", function() {
    toggleKeyframeSelection(this, parseInt(this.dataset.frame));
  });
});

// Copy Paste
function copyKeyframe() {
  if (!selectedObject || !keyframes[selectedObject.uuid]?.[currentFrame]) return;
  copiedKeyframe = { ...keyframes[selectedObject.uuid][currentFrame] };
}

function pasteKeyframe() {
  if (!selectedObject || !copiedKeyframe) return;
  
  const objectId = selectedObject.uuid;
  if (!keyframes[objectId]) keyframes[objectId] = {};
  
  keyframes[objectId][currentFrame] = { ...copiedKeyframe };
  
  updateVisualKeyframes();
  updateInterpolation();
  updateKeyframeButtonIcon();
}

// Controles de navegación
function rewind() {
  currentFrame = 0;
  updateCursor();
}
function forward() {
  currentFrame = totalFrames - 1;
  updateCursor();
}

// Add or Remove
function addOrRemoveKeyframe() {
  if (!selectedObject) return;
  
  const objectId = selectedObject.uuid;
  if (!keyframes[objectId]) keyframes[objectId] = {};
  
  const previousKeyframe = keyframes[objectId][currentFrame];
  
  const currentKeyframeData = {
    position: selectedObject.position.clone(),
    rotation: selectedObject.quaternion.clone(),
    scale: selectedObject.scale.clone()
  };
  
  // Verificar si los datos son diferentes
  const hasChanged = !previousKeyframe ||
    !previousKeyframe.position.equals(currentKeyframeData.position) ||
    !previousKeyframe.rotation.equals(currentKeyframeData.rotation) ||
    !previousKeyframe.scale.equals(currentKeyframeData.scale);
  
  if (hasChanged) {
    if (previousKeyframe) {
      // Reemplazar y guardar la acción en el undoStack
      undoStack.push({
        action: 'replaceKeyframe',
        uuid: objectId,
        frame: currentFrame,
        oldKeyframeData: previousKeyframe,
        newKeyframeData: currentKeyframeData
      });
    } else {
      // Agregar y guardar la acción en el undoStack
      undoStack.push({
        action: 'addKeyframe',
        uuid: objectId,
        frame: currentFrame,
        keyframeData: currentKeyframeData
      });
    }
    keyframes[objectId][currentFrame] = currentKeyframeData;
  } else if (previousKeyframe) {
    // Eliminar el keyframe si no hubo cambios
    undoStack.push({
      action: 'removeKeyframe',
      uuid: objectId,
      frame: currentFrame,
      keyframeData: previousKeyframe
    });
    delete keyframes[objectId][currentFrame];
  }
  
  redoStack = [];
  updateVisualKeyframes();
  updateKeyframeButtonIcon();
  showInterpolation();
}

/* Testing */
let isRendering = false;
let renderedImageFrames = [];
let isPlayingRendered = false;
let renderedFrameIndex = 0;
let playbackInterval = null;
let videoBlob = null;

async function renderVideo() {
  if (!scene || !renderer || !mainCamera) return;

  if (isRendering) {
    isRendering = false;
    await exportVideo();
    return;
  }

  isRendering = true;
  renderedImageFrames = [];

  for (let frame = 0; frame < totalFrames; frame++) {
    if (!isRendering) break;

    currentFrame = frame;
    updateCursor();
    render();

    const imageData = renderer.domElement.toDataURL("image/png");
    renderedImageFrames.push(imageData);
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  isRendering = false;
  await exportVideo();
}

async function exportVideo() {
  if (renderedImageFrames.length === 0) return;

  const videoContainer = document.getElementById("renderedVideo");
  videoContainer.innerHTML = "Procesando video...";

  const fps = 30;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = renderer.domElement.width;
  canvas.height = renderer.domElement.height;

  const stream = canvas.captureStream();
  const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  const chunks = [];

  mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
  mediaRecorder.onstop = async () => {
    videoBlob = new Blob(chunks, { type: "video/webm" });

    videoContainer.innerHTML = `<button onclick="saveAs()">Guardar Video</button>`;
  };

  mediaRecorder.start();

  let frameIndex = 0;
  function drawNextFrame() {
    if (frameIndex >= renderedImageFrames.length) {
      mediaRecorder.stop();
      return;
    }

    const img = new Image();
    img.src = renderedImageFrames[frameIndex];
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      frameIndex++;
      setTimeout(drawNextFrame, 1000 / fps);
    };
  }

  drawNextFrame();
}

async function saveAs() {
  if (!videoBlob) return;

  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: "animation.webm",
      types: [{ description: "Video", accept: { "video/webm": [".webm"] } }]
    });

    const writable = await handle.createWritable();
    await writable.write(videoBlob);
    await writable.close();
  } catch (error) {
    console.error("Error al guardar el archivo:", error);
  }
}

function playRenderedVideo() {
  if (renderedImageFrames.length === 0) return;

  const videoContainer = document.getElementById("renderedVideo");
  let canvas = videoContainer.querySelector("canvas");

  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.width = renderer.domElement.width;
    canvas.height = renderer.domElement.height;
    videoContainer.innerHTML = "";
    videoContainer.appendChild(canvas);
  }

  const ctx = canvas.getContext("2d");

  if (isPlayingRendered) {
    clearInterval(playbackInterval);
    isPlayingRendered = false;
    return;
  }

  isPlayingRendered = true;

  function renderNextFrame() {
    if (!isPlayingRendered) return;

    const frameImage = new Image();
    frameImage.src = renderedImageFrames[renderedFrameIndex];

    frameImage.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
    };

    renderedFrameIndex = (renderedFrameIndex + 1) % renderedImageFrames.length;
  }

  playbackInterval = setInterval(renderNextFrame, 1000 / 30);
}

function showInterpolation() {
  if (!selectedObject) {
    // Ocultar todas las líneas si no hay objeto seleccionado
    scene.traverse(child => {
      if (child.userData && child.userData.isInterpolationCurve) {
        child.visible = false;
      }
    });
    return;
  }
  
  const objectId = selectedObject.uuid;
  if (!keyframes[objectId]) return;
  
  if (selectedObject.userData.interpolationCurve) {
    scene.remove(selectedObject.userData.interpolationCurve);
    delete selectedObject.userData.interpolationCurve;
  }
  
  const keyframePositions = [];
  const sortedFrames = Object.keys(keyframes[objectId])
    .map(frame => parseInt(frame))
    .sort((a, b) => a - b);
  
  sortedFrames.forEach(frame => {
    const keyframe = keyframes[objectId][frame];
    keyframePositions.push(new THREE.Vector3(
      keyframe.position.x,
      keyframe.position.y,
      keyframe.position.z
    ));
  });
  
  if (keyframePositions.length < 2) return;
  
  const curve = new THREE.CatmullRomCurve3(keyframePositions);
  const curvePoints = curve.getPoints(80);
  
  const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
  const material = new THREE.LineBasicMaterial({
    transparent: true,
    opacity: 0.9,
    depthTest: false,
    linewidth: 1
  });
  
  const curveLine = new THREE.Line(geometry, material);
  curveLine.userData.exclude = true;
  curveLine.userData.isInterpolationCurve = true;
  
  scene.add(curveLine);
  selectedObject.userData.interpolationCurve = curveLine;
}

totalFramesInput.addEventListener("change", function() {
  // Limpiar los frames actuales
  framesContainer.innerHTML = "";
  
  // Obtener el número total de frames directamente desde el input
  const totalFrames = parseInt(totalFramesInput.value, 10);
  
  // Verificar si el valor de totalFrames es un número positivo
  if (!isNaN(totalFrames) && totalFrames > 0) {
    // Calcular el ancho del contenedor de los frames, dividiéndolo entre el número de frames
    const frameWidth = 100 / totalFrames;
    
    // Crear los nuevos frames
    for (let i = 0; i < totalFrames; i++) {
      const frame = document.createElement("div");
      frame.classList.add("frame");
      
      // Establecer el ancho de cada frame, en porcentaje
      frame.style.width = `${frameWidth}%`;
      
      // Añadir el frame al contenedor
      framesContainer.appendChild(frame);
    }
  }
  // Actualizar la posición del cursor si es necesario
  updateTimelineCursor();
});

function updateTimelineCursor() {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = "0%"; // Aseguramos que el cursor se sitúe al inicio.
}