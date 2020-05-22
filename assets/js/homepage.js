
import * as THREE from 'three';

var container;
var camera, scene, renderer;
var uniforms;
var geometry, material, mesh;
var animFrame;

function init() {
    container = document.getElementById('container');

    camera = new THREE.Camera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.PlaneBufferGeometry(2, 2);

    uniforms = {
        u_time: {
            type: "f",
            value: 1.0
        },
        u_resolution: {
            type: "v2",
            value: new THREE.Vector2()
        },
        u_mouse: {
            type: "v2",
            value: new THREE.Vector2()
        }
    };

    material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    document.onmousemove = function (e) {
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
    }
}

function onWindowResize(event) {
    renderer.setSize(container.clientWidth, container.clientHeight);
    uniforms.u_resolution.value.x = renderer.domElement.width;
    uniforms.u_resolution.value.y = renderer.domElement.height;
}

function animate() {
    animFrame = requestAnimationFrame(animate);
    render();
}

function render() {
    uniforms.u_time.value += 0.05;
    renderer.render(scene, camera);
}

export const shaderCanvasSetup = function() {
  console.log('Initting Canvas');
  init();
  animate();
}

export const shaderCanvasExit = function() {
    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
    cancelAnimationFrame(animFrame);
}

