let scene, camera, renderer, mesh, material;
let height = 0;
let animating = true;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(2.5, 2.5, 3.5);
  camera.lookAt(0, 0.5, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5);
  scene.add(light);

  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  material = new THREE.MeshPhongMaterial({ color: 0x4da6ff });

  createShape("cube");
  animate();
}

function createShape(type) {
  if (mesh) scene.remove(mesh);

  height = 0;
  animating = true;

  let geometry;

  // -------------------------
  // FIGURE GEOMETRICHE
  // -------------------------

  if (type === "cube") geometry = new THREE.BoxGeometry(1, 1, 1);

  if (type === "rectPrism") geometry = new THREE.BoxGeometry(1.5, 1, 0.7);

  if (type === "cylinder") geometry = new THREE.CylinderGeometry(0.7, 0.7, 1, 48);

  if (type === "pyramid") geometry = new THREE.ConeGeometry(0.8, 1, 4);

  if (type === "pentPrism") geometry = new THREE.CylinderGeometry(0.8, 0.8, 1, 5);

  if (type === "hexPrism") geometry = new THREE.CylinderGeometry(0.8, 0.8, 1, 6);

  if (type === "octPrism") geometry = new THREE.CylinderGeometry(0.8, 0.8, 1, 8);

  if (type === "ellipseCyl") {
    geometry = new THREE.CylinderGeometry(0.7, 0.7, 1, 48);
    geometry.scale(1.3, 1, 0.7);
  }

  if (type === "rhombPrism") {
    geometry = new THREE.BoxGeometry(1.2, 1, 0.6);
    geometry.rotateY(Math.PI / 4);
  }

  if (type === "parallPrism") geometry = new THREE.BoxGeometry(1.4, 1, 0.6);

  if (type === "trapPrism") {
    const s = new THREE.Shape();
    s.moveTo(-0.6, 0);
    s.lineTo(0.6, 0);
    s.lineTo(0.3, 1);
    s.lineTo(-0.3, 1);
    s.closePath();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "isoPyr") geometry = new THREE.ConeGeometry(0.8, 1, 3);

  if (type === "eqPyr") geometry = new THREE.ConeGeometry(0.8, 1, 3);

  if (type === "star5Prism") {
    const s = starShape(0.9, 0.4, 5);
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "crossPrism") {
    const s = crossShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  // -------------------------
  // FIGURE CREATIVE
  // -------------------------

  if (type === "heart") {
    const s = heartShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "flower") {
    const s = flowerShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "cloud") {
    const s = cloudShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "arrow") {
    const s = arrowShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "drop") {
    const s = dropShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "shield") {
    const s = shieldShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "leaf") {
    const s = leafShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "star6Prism") {
    const s = starShape(0.9, 0.4, 6);
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "star8Prism") {
    const s = starShape(0.9, 0.4, 8);
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "irregHex") {
    const s = new THREE.Shape();
    s.moveTo(-0.8, 0);
    s.lineTo(-0.4, -0.6);
    s.lineTo(0.5, -0.7);
    s.lineTo(0.9, 0);
    s.lineTo(0.4, 0.8);
    s.lineTo(-0.5, 0.6);
    s.closePath();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "oval") {
    const s = new THREE.Shape();
    s.absellipse(0, 0, 0.9, 0.5, 0, Math.PI * 2);
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "lens") {
    const s = lensShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "diamond") {
    const s = new THREE.Shape();
    s.moveTo(0, 1);
    s.lineTo(0.7, 0);
    s.lineTo(0, -1);
    s.lineTo(-0.7, 0);
    s.closePath();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "crescent") {
    const s = crescentShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  if (type === "curvedArrow") {
    const s = curvedArrowShape();
    geometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false });
  }

  // -------------------------
  // CREAZIONE MESH
  // -------------------------

  mesh = new THREE.Mesh(geometry, material);
  mesh.scale.y = 0.001;
  mesh.position.y = 0;

  scene.add(mesh);
}

function animate() {
  requestAnimationFrame(animate);

  if (animating && height < 1) {
    height += 0.003; // animazione lenta
    mesh.scale.y = height;
    mesh.position.y = height / 2;

    if (height >= 1) animating = false;
  }

  if (!animating) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

// --------------------------------------------------
// SHAPE HELPERS
// --------------------------------------------------

function starShape(R, r, n) {
  const s = new THREE.Shape();
  const step = (Math.PI * 2) / (n * 2);
  let angle = -Math.PI / 2;
  s.moveTo(Math.cos(angle) * R, Math.sin(angle) * R);
  for (let i = 1; i < n * 2; i++) {
    angle += step;
    const radius = i % 2 === 0 ? R : r;
    s.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
  }
  s.closePath();
  return s;
}

function crossShape() {
  const s = new THREE.Shape();
  const a = 0.3;
  s.moveTo(-a, 1);
  s.lineTo(a, 1);
  s.lineTo(a, a);
  s.lineTo(1, a);
  s.lineTo(1, -a);
  s.lineTo(a, -a);
  s.lineTo(a, -1);
  s.lineTo(-a, -1);
  s.lineTo(-a, -a);
  s.lineTo(-1, -a);
  s.lineTo(-1, a);
  s.lineTo(-a, a);
  s.closePath();
  return s;
}

function heartShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.5);
  s.bezierCurveTo(0.5, 1.2, 1.2, 0.8, 0.8, 0.2);
  s.bezierCurveTo(0.6, -0.3, 0, -0.6, 0, -1);
  s.bezierCurveTo(0, -0.6, -0.6, -0.3, -0.8, 0.2);
  s.bezierCurveTo(-1.2, 0.8, -0.5, 1.2, 0, 0.5);
  return s;
}

function flowerShape() {
  const s = new THREE.Shape();
  const petals = 6;
  const R = 0.9;
  for (let i = 0; i < petals; i++) {
    const angle = (i / petals) * Math.PI * 2;
    const x = Math.cos(angle) * R;
    const y = Math.sin(angle) * R;
    if (i === 0) s.moveTo(x, y);
    else s.quadraticCurveTo(0, 0, x, y);
  }
  s.closePath();
  return s;
}

function cloudShape() {
  const s = new THREE.Shape();
  s.moveTo(-1, 0);
  s.quadraticCurveTo(-1.2, 0.5, -0.6, 0.6);
  s.quadraticCurveTo(-0.4, 1, 0, 0.8);
  s.quadraticCurveTo(0.4, 1.1, 0.7, 0.7);
  s.quadraticCurveTo(1.2, 0.6, 1, 0);
  s.quadraticCurveTo(0.5, -0.4, 0, -0.3);
  s.quadraticCurveTo(-0.5, -0.4, -1, 0);
  return s;
}

function arrowShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.8, -0.2);
  s.lineTo(0.2, -0.2);
  s.lineTo(0.2, -0.5);
  s.lineTo(0.9, 0);
  s.lineTo(0.2, 0.5);
  s.lineTo(0.2, 0.2);
  s.lineTo(-0.8, 0.2);
  s.closePath();
  return s;
}

function dropShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 1);
  s.quadraticCurveTo(0.7, 0.3, 0.4, -0.6);
  s.quadraticCurveTo(0, -1, -0.4, -0.6);
  s.quadraticCurveTo(-0.7, 0.3, 0, 1);
  return s;
}

function shieldShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 1);
  s.lineTo(0.8, 0.4);
  s.lineTo(0.6, -0.8);
  s.lineTo(0, -1);
  s.lineTo(-0.6, -0.8);
  s.lineTo(-0.8, 0.4);
  s.closePath();
  return s;
}

function leafShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 1);
  s.quadraticCurveTo(0.8, 0.3, 0.3, -0.8);
  s.quadraticCurveTo(0, -1, -0.3, -0.8);
  s.quadraticCurveTo(-0.8, 0.3, 0, 1);
  return s;
}

function lensShape() {
  const s = new THREE.Shape();
  s.moveTo(-1, 0);
  s.quadraticCurveTo(0, 1, 1, 0);
  s.quadraticCurveTo(0, -1, -1, 0);
  return s;
}

function crescentShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 1);
  s.quadraticCurveTo(1, 0.8, 1, 0);
  s.quadraticCurveTo(1, -0.8, 0, -1);
  s.quadraticCurveTo(0.4, -0.4, 0.4, 0);
  s.quadraticCurveTo(0.4, 0.4, 0, 1);
  return s;
}

function curvedArrowShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.8, -0.2);
  s.quadraticCurveTo(-0.2, 0.6, 0.4, 0.4);
  s.lineTo(0.3, 0.1);
  s.lineTo(0.9, 0.6);
  s.lineTo(0.2, 0.9);
  s.lineTo(0.3, 0.6);
  s.quadraticCurveTo(-0.4, 0.8, -0.9, 0);
  s.closePath();
  return s;
}

document.getElementById("shapeSelect").addEventListener("change", (e) => {
  createShape(e.target.value);
});

init();

