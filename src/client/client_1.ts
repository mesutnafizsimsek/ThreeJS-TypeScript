import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene()

// Create a second scene for showing another shape
const scene2 = new THREE.Scene()

const camera1 = new THREE.PerspectiveCamera(
    100,
    1,
    0.1,
    100
)
camera1.position.z = 2
camera1.position.x = 2
camera1.lookAt(0,0,0)

// Orthographic camera for the second scene 
// Its a 2D camera, and does not show the perspective
const camera2 = new THREE.OrthographicCamera(-2,2,2,-2)
const camera3 = new THREE.OrthographicCamera(-2,2,2,-2)
const camera4 = new THREE.OrthographicCamera(-2,2,2,-2)

camera2.position.z = 2

// Let the camera3 look at from the top
camera3.position.z = 2
camera3.position.y = 2
camera3.lookAt(0,0,0)

// Let the camera4 look at from the side
camera4.position.z = 2
camera4.position.x = 2
camera4.lookAt(0,0,0)


const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const canvas2 = document.getElementById('c2') as HTMLCanvasElement
const canvas3 = document.getElementById('c3') as HTMLCanvasElement
const canvas4 = document.getElementById('c4') as HTMLCanvasElement
const canvas5 = document.getElementById('c5') as HTMLCanvasElement

const renderer1 = new THREE.WebGLRenderer({canvas:canvas1})
const renderer2 = new THREE.WebGLRenderer({canvas:canvas2})
const renderer3 = new THREE.WebGLRenderer({canvas:canvas3})

const renderer4 = new THREE.WebGLRenderer({canvas:canvas4})
const renderer5 = new THREE.WebGLRenderer({canvas:canvas5})

// Cancelling the renderer.domElement and we use a Hard coded canvas

//renderer.setSize(window.innerWidth, window.innerHeight)
//document.body.appendChild(renderer.domElement)

new OrbitControls(camera1, renderer1.domElement)


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

    cube.rotation.x += 0.005
    cube.rotation.y += 0.005

    tube.rotation.x += 0.005
    tube.rotation.y += 0.005

    render()
}

function render() {
    renderer1.render(scene, camera1)
    renderer2.render(scene2, camera1)
    renderer3.render(scene, camera2)
    renderer4.render(scene, camera3)
    renderer5.render(scene, camera4)

}


animate()