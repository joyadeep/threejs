import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cubeMesh);

// adding a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 30);
camera.position.z = 5;
scene.add(camera);


const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(window.innerWidth,window.innerHeight)
const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;
controls.autoRotate = false;
const renderloop = () =>{
  controls.update();
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderloop)
}
renderloop();