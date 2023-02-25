import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene()

// Create a second scene for showing another shape
const scene2 = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    100,
    1,
    0.1,
    100
)
camera.position.z = 2

const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const canvas2 = document.getElementById('c2') as HTMLCanvasElement
const canvas3 = document.getElementById('c3') as HTMLCanvasElement


const renderer1 = new THREE.WebGLRenderer({canvas:canvas1})
const renderer2 = new THREE.WebGLRenderer({canvas:canvas2})
const renderer3 = new THREE.WebGLRenderer({canvas:canvas3})


// Cancelling the renderer.domElement and we use a Hard coded canvas

//renderer.setSize(window.innerWidth, window.innerHeight)
//document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer1.domElement)


const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x665622,
    wireframe: true,
})

// Create another geometry for the second scene
const geometry_ring = new THREE.IcosahedronGeometry()

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const tube = new THREE.Mesh(geometry_ring, material)
scene2.add(tube)

// A function for resizing the renderer with the canvas to make it responsive

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer1.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// We use one animate function for all objects in the ALL scenes 
// Note that they should be globally declared
function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    tube.rotation.x += 0.02
    tube.rotation.y += 0.02

    render()
}

function render() {
    renderer1.render(scene, camera)
    renderer2.render(scene2, camera)
    renderer3.render(scene, camera)

}


animate()