import * as THREE from "three";

// Scene is like the 3d world where all the objects, lights, and cameras are placed.
// It will be rendered on a canvas element.
const scene = new THREE.Scene();
const canvas = document.getElementById("experience-canvas");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera is used to view the scene. It defines what part of the scene is visible.
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);

// The camera is added to the scene so that it can be used to render the scene.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2)); // Set up screen pixel ratio to css pixel ratio
document.body.appendChild(renderer.domElement);

// A simple cube is created to demonstrate the 3D rendering.
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// This will change the size of the camera when the window size is changing dynamically
function handleResize() {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
}

window.addEventListener("resize", handleResize);

// Animation loop to render the scene
function animate() {
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
renderer.setAnimationLoop(animate);
