import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
cubeMesh.position.y= -1;
const cubeMesh2 = new THREE.Mesh(cubeGeometry,cubeMaterial)
cubeMesh2.position.x=2;
const cubeMesh3 = new THREE.Mesh(cubeGeometry,cubeMaterial)
cubeMesh3.position.x=-2;
// scene.add(cubeMesh);

// const position = new THREE.Vector3(1,1,2);
// cubeMesh.position.copy(position);

const group = new THREE.Group();
group.position.setScalar(1)
group.add(cubeMesh);
group.add(cubeMesh2);
group.add(cubeMesh3);
scene.add(group);

// cubeMesh.scale.set(3,2,2)

const axesHelper = new THREE.AxesHelper(5);

// adding a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 30);
camera.position.z = 5;
scene.add(axesHelper);
scene.add(camera);


const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
})
renderer.setSize(window.innerWidth,window.innerHeight)
const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;
const renderloop = () =>{
  controls.update();
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderloop)
}
renderloop();