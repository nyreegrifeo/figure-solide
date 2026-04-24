let scene, camera, renderer;
let mesh = null;        // solido 3D
let flatShape = null;   // figura piana 2D
let arrow = null;       // freccia didattica
let animating = false;
let height = 0;

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

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  createShape("cube");
  animate();
}

/* --------------------------------------------------
   FIGURA PIANA 2D
-------------------------------------------------- */
function createFlatShape(shape) {
  const geometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshBasicMaterial({
    color: 0x003366,
    side: THREE.DoubleSide
  });

  const flat = new THREE.Mesh(geometry, material);
  flat.rotation.x = -Math.PI / 2;
  flat.position.y = 0;

  return flat;
}

/* --------------------------------------------------
   FRECCIA DIDATTICA
-------------------------------------------------- */
function createArrow() {
  const arrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0.1, 0),
    1,
    0xff0000
  );
  return arrow;
}

/* --------------------------------------------------
   SOLIDO ESTRUSO
-------------------------------------------------- */
function createExtruded(shape) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 1,
    bevelEnabled: false
  });

  const material = new THREE.MeshPhongMaterial({ color: 0x4da6ff });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.scale.y = 0.001;
  mesh.position.y = 0;

  return mesh;
}

/* --------------------------------------------------
   CREA LA SHAPE 2D IN BASE AL TIPO
-------------------------------------------------- */
function getShapeByType(type) {
  // GEOMETRICHE BASE
  if (type === "cube") return new THREE.Shape().moveTo(-0.5, -0.5).lineTo(0.5, -0.5).lineTo(0.5, 0.5).lineTo(-0.5, 0.5).closePath();
  if (type === "cylinder") return new THREE.Shape().absellipse(0, 0, 0.7, 0.7, 0, Math.PI * 2);
  if (type === "pyramid") return new THREE.Shape().moveTo(0, 0.8).lineTo(0.8, -0.8).lineTo(-0.8, -0.8).closePath();

  // TUTTE LE TUE FIGURE CREATIVE
  if (type === "star5Prism") return starShape(0.9, 0.4, 5);
  if (type === "star6Prism") return starShape(0.9, 0.4, 6);
  if (type === "star8Prism") return starShape(0.9, 0.4, 8);
  if (type === "crossPrism") return crossShape();
  if (type === "heart") return heartShape();
  if (type === "flower") return flowerShape();
  if (type === "cloud") return cloudShape();
  if (type === "arrow") return arrowShape();
  if (type === "drop") return dropShape();
  if (type === "shield") return shieldShape();
  if (type === "leaf") return leafShape();
  if (type === "lens") return lensShape();
  if (type === "crescent") return crescentShape();
  if (type === "curvedArrow") return curvedArrowShape();

  // fallback
  return new THREE.Shape();
}

/* --------------------------------------------------
   CREAZIONE COMPLETA DELLA FIGURA (VERSIONE C)
-------------------------------------------------- */
function createShape(type) {
  if (mesh) scene.remove(mesh);
  if (flatShape) scene.remove(flatShape);
  if (arrow) scene.remove(arrow);

  height = 0;
  animating = false;

  const shape = getShapeByType(type);

  flatShape = createFlatShape(shape);
  scene.add(flatShape);

  arrow = createArrow();
  scene.add(arrow);

  mesh = createExtruded(shape);
  scene.add(mesh);

  setTimeout(() => {
    scene.remove(arrow);
    animating = true;
  }, 600);
}

/* --------------------------------------------------
   ANIMAZIONE
-------------------------------------------------- */
function animate() {
  requestAnimationFrame(animate);

  if (animating && height < 1) {
    height += 0.003;
    mesh.scale.y = height;
    mesh.position.y = height / 2;
  }

  renderer.render(scene, camera);
}

/* --------------------------------------------------
   SHAPE HELPERS (tutte le tue funzioni)
-------------------------------------------------- */

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
