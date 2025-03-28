/* Models */
function importCharacter(textureName) {
  const loader = new THREE.GLTFLoader();
  loader.load('models/CM Advanced.glb', function(gltf) {
    const texture = new THREE.TextureLoader().load(`textures/${textureName}.png`);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.flipY = false;
    
    gltf.scene.traverse(node => {
      if (node.isMesh) node.material.map = texture;
    });
    
    gltf.scene.rotation.y = Math.PI / -2;
    gltf.scene.name = textureName;
    gltf.scene.userData.previewMaterials = true;
    scene.add(gltf.scene);
    addBoneMarkers();
    hide();
    
    selectedObject = gltf.scene;
    attachTransformControls(selectedObject);
  });
}
function importModel() {
  const inputElement = document.createElement('input');
  inputElement.type = 'file';
  inputElement.accept = '.obj';
  
  inputElement.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileContent = e.target.result;
      const objLoader = new THREE.OBJLoader();
      const textureLoader = new THREE.TextureLoader();
      
      const texture = textureLoader.load('textures/world.png', function(texture) {
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;
      });
      
      const object = objLoader.parse(fileContent);
      
      object.traverse(function(child) {
        if (child.isMesh) {
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      });
      
      scene.add(object);
      
      // Animación de aparición de los polígonos
      let currentFaceIndex = 0;
      const totalFaces = object.children[0].geometry.faces.length;
      const geometry = object.children[0].geometry;
      const material = object.children[0].material;
      
      // Crear un nuevo buffer de geometría para actualizar las caras
      const bufferGeometry = new THREE.BufferGeometry().setFromPoints(geometry.vertices);
      const faceIndices = geometry.faces.map(face => [face.a, face.b, face.c]);
      
      const updateGeometry = () => {
        if (currentFaceIndex < totalFaces) {
          const faceIndex = faceIndices[currentFaceIndex];
          
          // Cargar el siguiente triángulo
          const positions = [];
          faceIndex.forEach(index => {
            positions.push(geometry.vertices[index].x, geometry.vertices[index].y, geometry.vertices[index].z);
          });
          
          bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
          
          // Crear un nuevo material con las caras progresivas
          const progressiveMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, transparent: true, opacity: 0.5 });
          
          const mesh = new THREE.Mesh(bufferGeometry, progressiveMaterial);
          scene.add(mesh);
          
          currentFaceIndex++;
        } else {
          cancelAnimationFrame(updateGeometry);
        }
      };
      
      const animate = () => {
        updateGeometry();
        if (currentFaceIndex < totalFaces) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };
    
    reader.readAsText(file);
  });
  
  inputElement.click();
}
function importWorld(worldName) {
  const objLoader = new THREE.OBJLoader();
  const textureLoader = new THREE.TextureLoader();
  
  const texture = textureLoader.load("textures/world-texture.png");
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  
  let worldGroup = scene.getObjectByName("World");
  if (!worldGroup) {
    worldGroup = new THREE.Group();
    worldGroup.name = "World";
    scene.add(worldGroup);
  }
  
  objLoader.load(
    `models/worlds/${worldName}.obj`,
    (world) => {
      world.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            alphaTest: 1,
            depthWrite: true,
            depthTest: true,
            opacity: 1.0,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      world.position.set(0, 0, 0);
      world.scale.set(1, 1, 1);
      worldGroup.add(world);
    },
    (xhr) => {
      console.log(`Cargando mundo: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
    },
    (error) => {
      console.error("Error al cargar el mundo:", error);
    }
  );
}

/* Construction */
function block(textureName) {
  const loader = new THREE.OBJLoader();
  const texture = new THREE.TextureLoader().load(`textures/blocks/${textureName}.png`);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  
  let blockGroup = scene.getObjectByName("Block") || new THREE.Group();
  blockGroup.name = "Block";
  if (!scene.getObjectByName("Block")) scene.add(blockGroup);
  
  loader.load("models/block.obj", (block) => {
    block.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ map: texture
          
        });
        child.name = textureName;
        child.position.set(0.5, 0.5, 0.5);
        child.userData.block = true;
        blockGroup.add(child);
        hide();
      }
    });
  });
}
function stair(textureName) {
  const loader = new THREE.OBJLoader();
  const texture = new THREE.TextureLoader().load(`textures/blocks/${textureName}.png`);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  
  let stairGroup = scene.getObjectByName("Stair") || new THREE.Group();
  stairGroup.name = "Stair";
  if (!scene.getObjectByName("Stair")) scene.add(stairGroup);
  
  loader.load("models/stair.obj", (stair) => {
    stair.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ map: texture });
        child.name = textureName;
        child.position.set(0.5, 0.5, 0.5);
        child.userData.block = true;
        stairGroup.add(child);
        hide()
      }
    });
  });
}
function slab(textureName) {
  const loader = new THREE.OBJLoader();
  const texture = new THREE.TextureLoader().load(`textures/blocks/${textureName}.png`);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  
  let slabGroup = scene.getObjectByName("Slab") || new THREE.Group();
  slabGroup.name = "Slab";
  if (!scene.getObjectByName("Slab")) scene.add(slabGroup);
  
  loader.load("models/slab.obj", (slab) => {
    slab.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ map: texture });
        child.name = textureName;
        child.position.set(0.5, 0.5, 0.5);
        child.userData.block = true;
        slabGroup.add(child);
        hide()
      }
    });
  });
}

/* Lights */
function point() {
  const point = new THREE.PointLight(0xffffff, 0.5, 5);
  point.castShadow = true;
  point.position.y = 1;
  point.shadow.mapSize.set(2048, 2048);
  point.shadow.bias = -0.01;
  point.name = "Point";
  scene.add(point);
  addLightMarkers()
  hide()
}
function sun() {
  const sun = new THREE.DirectionalLight(0xffffff, 0.3);
  sun.position.set(1, 2, 1);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  sun.shadow.camera.left = -40;
  sun.shadow.camera.right = 40;
  sun.shadow.camera.top = 40;
  sun.shadow.camera.bottom = -40;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 100;
  sun.shadow.bias = -0.001;
  sun.shadow.normalBias = 0.001;
  sun.name = "Sun";
  scene.add(sun);
  addLightMarkers()
  hide()
}
function spot() {
  const spot = new THREE.SpotLight(0xffffff, 0.3);
  spot.position.set(10, 15, 10);
  spot.angle = Math.PI / 6;
  spot.penumbra = 0.5;
  spot.castShadow = true;
  spot.shadow.mapSize.set(4096, 4096);
  spot.shadow.camera.near = 0.5;
  spot.shadow.camera.far = 50;
  spot.shadow.bias = -0.0001;
  spot.shadow.normalBias = 0.05;
  spot.name = "Spot";
  scene.add(spot);
  addLightMarkers()
  hide()
}

const constructionTextures = ["grass", "dirt", "stone", "gravel", "bedrock", "ice", "rock", "brick", "glass"];

function blockList() {
  const container = document.getElementById("textureList");
  container.innerHTML = "";
  
  constructionTextures.forEach(texture => {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.onclick = () => block(texture);
    
    const img = document.createElement("img");
    img.src = `textures/blocks/${texture}.png`;
    img.className = "blockImg";
    
    const span = document.createElement("span");
    span.textContent = texture;
    
    div.appendChild(img);
    div.appendChild(span);
    container.appendChild(div);
  });
}
function stairList() {
  const container = document.getElementById("textureList");
  container.innerHTML = "";
  
  constructionTextures.forEach(texture => {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.onclick = () => stair(texture);
    
    const img = document.createElement("img");
    img.src = `textures/blocks/${texture}.png`;
    
    const span = document.createElement("span");
    span.textContent = texture;
    
    div.appendChild(img);
    div.appendChild(span);
    container.appendChild(div);
  });
}
function slabList() {
  const container = document.getElementById("textureList");
  container.innerHTML = "";
  
  constructionTextures.forEach(texture => {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.onclick = () => slab(texture);
    
    const img = document.createElement("img");
    img.src = `textures/blocks/${texture}.png`;
    
    const span = document.createElement("span");
    span.textContent = texture;
    
    div.appendChild(img);
    div.appendChild(span);
    container.appendChild(div);
  });
}
function textureList() {
  const container = document.getElementById("textureList");
  container.innerHTML = "";
  
  constructionTextures.forEach(texture => {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.onclick = () => applyTexture(texture);
    
    const img = document.createElement("img");
    img.src = `textures/blocks/${texture}.png`;
    img.className = "blockImg";
    
    const span = document.createElement("span");
    span.textContent = texture;
    
    div.appendChild(img);
    div.appendChild(span);
    container.appendChild(div);
  });
}

/* Objects Edit */
function variant(number, type) {
  if (!selectedObject) return;
  
  const loader = new THREE.OBJLoader();
  const path = number === 1 ? `models/${type}.obj` : `models/${type}${number}.obj`;
  
  loader.load(path, (object) => {
    const newGeometry = object.children[0].geometry.clone();
    selectedObject.geometry.dispose();
    selectedObject.geometry = newGeometry;
    selectedObject.updateMatrix();
  });
}
function applyTexture(texture) {
  if (!selectedObject || !selectedObject.material) return;
  
  const textureLoader = new THREE.TextureLoader();
  const newTexture = textureLoader.load(`textures/blocks/${texture}.png`);
  
  newTexture.magFilter = THREE.NearestFilter;
  newTexture.minFilter = THREE.NearestFilter;
  
  selectedObject.material.map = newTexture;
  selectedObject.material.needsUpdate = true;
  
  hide();
}
function customTexture() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  
  input.onchange = (event) => {
    const file = event.target.files[0];
    if (!file || !selectedObject || !selectedObject.material) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const textureLoader = new THREE.TextureLoader();
      const newTexture = textureLoader.load(e.target.result, () => {
        newTexture.magFilter = THREE.NearestFilter;
        newTexture.minFilter = THREE.NearestFilter;
        
        // Invertir la textura en el eje Y
        newTexture.flipY = false;
        
        selectedObject.material.map = newTexture;
        selectedObject.material.needsUpdate = true;
        
        hide();
      });
    };
    reader.readAsDataURL(file);
  };
  
  input.click();
}

function updateLightUI() {
  if (selectedObject && selectedObject.isLight) {
    document.getElementById("lightIntensity").value = selectedObject.intensity;
    lightColor.setColor(`#${selectedObject.color.getHexString()}`);
    document.getElementById("enableShadows").checked = !selectedObject.userData.disabledShadows;
    
    let shadowSoftnessInput = document.getElementById("shadowSoftness");
    let biasInput = document.getElementById("lightBias");
    let distanceInput = document.getElementById("lightDistance");
    let angleInput = document.getElementById("lightAngle");
    
    if (selectedObject.shadow) {
      shadowSoftnessInput.value = selectedObject.isDirectionalLight ?
        Math.abs(selectedObject.shadow.camera.left) :
        selectedObject.shadow.radius;
      biasInput.value = selectedObject.shadow.bias || 0;
    } else {
      shadowSoftnessInput.value = "";
      biasInput.value = "";
    }
    
    distanceInput.value = selectedObject.distance || 0;
    angleInput.value = selectedObject.angle || 0;
  }
}
document.getElementById("enableShadows").addEventListener("change", (event) => {
  if (selectedObject && selectedObject.isLight) {
    if (event.target.checked) {
      delete selectedObject.userData.disabledShadows;
      selectedObject.castShadow = true;
    } else {
      selectedObject.userData.disabledShadows = true;
      selectedObject.castShadow = false;
    }
    updateLightUI();
  }
});
lightColorPicker.on('change', (color) => {
  if (selectedObject && selectedObject.isLight) {
    selectedObject.color.set(color.toHEXA().toString());
  }
});
document.getElementById("lightIntensity").addEventListener("input", function() {
  if (selectedObject && selectedObject.isLight) {
    selectedObject.intensity = parseFloat(this.value);
  }
});
document.getElementById("shadowSoftness").addEventListener("input", (event) => {
  if (selectedObject && selectedObject.isLight && selectedObject.shadow) {
    let softness = parseFloat(event.target.value);
    
    if (selectedObject.isDirectionalLight) {
      selectedObject.shadow.camera.left = -softness;
      selectedObject.shadow.camera.right = softness;
      selectedObject.shadow.camera.top = softness;
      selectedObject.shadow.camera.bottom = -softness;
      selectedObject.shadow.camera.updateProjectionMatrix();
    } else if (selectedObject.isSpotLight || selectedObject.isPointLight) {
      selectedObject.shadow.radius = softness;
    }
  }
});
document.getElementById("lightBias").addEventListener("input", function() {
  if (selectedObject && selectedObject.shadow) {
    selectedObject.shadow.bias = parseFloat(this.value);
  }
});
document.getElementById("lightDistance").addEventListener("input", function() {
  if (selectedObject && selectedObject.isLight) {
    selectedObject.distance = parseFloat(this.value);
  }
});
document.getElementById("lightAngle").addEventListener("input", function() {
  if (selectedObject && selectedObject.isSpotLight) {
    selectedObject.angle = parseFloat(this.value);
  }
});