import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red",wireframe: false});
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cubeMesh);
scene.background = new THREE.Color("white")

// cubeMesh.rotation.x = THREE.MathUtils.degToRad(45)

// const axesHelper = new THREE.AxesHelper(10);
// cubeMesh.add(axesHelper)

const fog = new THREE.Fog("white",1,10)
scene.fog = fog

// adding a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 30);
camera.position.z = 5;
scene.add(camera);


const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
})
renderer.setSize(window.innerWidth,window.innerHeight)
const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;

// const clock = new THREE.Clock();
// let previousTime = 0;

const renderloop = () =>{
  controls.update();
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderloop)
}
renderloop();