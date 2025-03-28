/* Transform Snap (Disabled by Default) */
let snapEnabled = false;

document.getElementById("autoSnap").addEventListener("change", function() {
  autoSnap = this.checked;
});

transformControls.setTranslationSnap(null);
transformControls.setRotationSnap(null);
transformControls.setScaleSnap(null);

const positionStepInput = document.getElementById("positionStep");
const rotationStepInput = document.getElementById("rotationStep");
const scaleStepInput = document.getElementById("scaleStep");
const snapButton = document.getElementById("snap");

positionStepInput.value = 0.5;
rotationStepInput.value = 45;
scaleStepInput.value = 0.5;

function applySnapSettings() {
  if (snapEnabled) {
    transformControls.setTranslationSnap(parseFloat(positionStepInput.value) || null);
    transformControls.setRotationSnap(THREE.MathUtils.degToRad(parseFloat(rotationStepInput.value)) || null);
    transformControls.setScaleSnap(parseFloat(scaleStepInput.value) || null);
  } else {
    transformControls.setTranslationSnap(null);
    transformControls.setRotationSnap(null);
    transformControls.setScaleSnap(null);
  }
}

snapButton.addEventListener("click", () => {
  snapEnabled = !snapEnabled;
  snapButton.classList.toggle("active", snapEnabled);
  applySnapSettings();
});

positionStepInput.addEventListener("input", applySnapSettings);
rotationStepInput.addEventListener("input", applySnapSettings);
scaleStepInput.addEventListener("input", applySnapSettings);

/* Light */
let lightPreview = document.getElementById("lightPreview").checked;

document.getElementById("lightPreview").addEventListener("change", function() {
  lightPreview = this.checked;
});

/* Render Quality */
const qualitySettings = {
"qualityLow": 0.75,
"qualityMid": 1,
"qualityHigh": 1.3,
"qualityUltra": 1.5
};
const qualityButtons = document.querySelectorAll("#qualityLow, #qualityMid, #qualityHigh, #qualityUltra");

qualityButtons.forEach(button => {
button.addEventListener("click", () => {
qualityButtons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");

renderer.setPixelRatio(qualitySettings[button.id]);

});
});

document.getElementById("qualityHigh").classList.add("active");
renderer.setPixelRatio(1.3);

/* Render Distance */
const distanceButtons = {
distance500: 500,
distance1200: 1200,
distance3000: 3000
};
Object.keys(distanceButtons).forEach(id => {
const button = document.getElementById(id);
button.addEventListener("click", () => {
mainCamera.far = distanceButtons[id];
mainCamera.updateProjectionMatrix();

document.querySelectorAll("#distance500, #distance1200, #distance3000").forEach(btn => btn.classList.remove("active"));  
button.classList.add("active");

});
});
document.getElementById("distance1200").click();

/* Rotation and damping */
const rotationVelocityInput = document.getElementById("rotationVelocity");
const dampingInput = document.getElementById("damping");

rotationVelocityInput.value = 0.8;
dampingInput.value = 0.2;

rotationVelocityInput.min = 0.1;
rotationVelocityInput.max = 2;
dampingInput.min = 0.1;
dampingInput.max = 1;

controls.rotateSpeed = parseFloat(rotationVelocityInput.value);
controls.dampingFactor = parseFloat(dampingInput.value);

rotationVelocityInput.addEventListener("input", () => {
let value = Math.max(rotationVelocityInput.min, Math.min(rotationVelocityInput.max, parseFloat(rotationVelocityInput.value)));
rotationVelocityInput.value = value;
controls.rotateSpeed = value;
});

dampingInput.addEventListener("input", () => {
let value = Math.max(dampingInput.min, Math.min(dampingInput.max, parseFloat(dampingInput.value)));
dampingInput.value = value;
controls.dampingFactor = value;
});

/* Global Light Settings */
const globalIntensityInput = document.getElementById("globalIntensity");
const colorPicker = pickr;

globalIntensityInput.value = 1;

function applyGlobalLightSettings() {
  if (globalLight) {
    globalLight.intensity = parseFloat(globalIntensityInput.value);
    
    const color = colorPicker.getColor().toRGBA();
    globalLight.color.setRGB(color[0] / 255, color[1] / 255, color[2] / 255);
  }
}

globalIntensityInput.addEventListener("input", applyGlobalLightSettings);
colorPicker.on("change", applyGlobalLightSettings);

/* Time presets */
document.addEventListener("DOMContentLoaded", function() {
  const timePresets = {
    timeDefault: { color: "#FFFFFF", intensity: 1.0, sky: "textures/sky/sky.png" },
    timeSunrise: { color: "#FF9679", intensity: 0.4, sky: "textures/sky/sunrise.png" },
    timeDay: { color: "#CFE6FF", intensity: 0.8, sky: "textures/sky/day.png" },
    timeAfternoon: { color: "#E6F8FF", intensity: 1.0, sky: "textures/sky/afternoon.png" },
    timeSunset: { color: "#FFA655", intensity: 0.8, sky: "textures/sky/sunset.png" },
    timeNight: { color: "#97C4FF", intensity: 0.3, sky: "textures/sky/night.png" }
  };
  
  const skyTextures = {};
  
  Object.values(timePresets).forEach(({ sky }) => {
    textureLoader.load(sky, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      skyTextures[sky] = texture;
    });
  });
  
  scene.background = skyTextures[timePresets.timeDefault.sky] || textureLoader.load(timePresets.timeDefault.sky, (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
  });
  
  Object.keys(timePresets).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => {
        const { color, intensity, sky } = timePresets[id];
        
        globalLight.color.set(color);
        globalLight.intensity = intensity;
        document.getElementById("globalIntensity").value = intensity;
        pickr.setColor(color);
        
        setTimeout(() => {
          if (skyTextures[sky]) scene.background = skyTextures[sky];
        }, 0);
      });
    }
  });
});

/* 360 Sky */
document.getElementById("skyTexture").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(e.target.result, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
      texture.flipY = false;
      
      scene.background = texture;
    });
  };
  
  reader.readAsDataURL(file);
});

/* Clouds */
document.addEventListener("DOMContentLoaded", function() {
  const toggleClouds = document.getElementById("toggleClouds");
  
  toggleClouds.addEventListener("change", function() {
    const clouds = scene.getObjectByName("Clouds");
    if (clouds) {
      clouds.visible = this.checked;
    }
  });
});

addBoneMarkers()