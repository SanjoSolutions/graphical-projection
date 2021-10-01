import {
  BoxGeometry, EdgesGeometry, LineBasicMaterial, LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera, PointLight,
  Scene,
  WebGLRenderer,
  Color
} from 'three'
import './index.css'

export async function main() {
  const aspect = window.innerWidth / window.innerHeight
  const d = 20

  const scene = new Scene()
  scene.background = new Color(0xffffff)
  const camera = new OrthographicCamera(
      -d * aspect,
    d * aspect,
    d,
    -d,
    1,
    1000
  )
  camera.position.set(d, d, d)
  camera.lookAt(scene.position)

  const renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const geometry = new BoxGeometry(10, 10, 10)
  const material = new MeshBasicMaterial({ color: 0xffffff })

  const cube1 = new Mesh(geometry, material)
  cube1.position.x = 0
  cube1.position.y = 0
  cube1.position.z = 0
  scene.add(cube1)

  const cube2 = new Mesh(geometry, material)
  cube2.position.x = -10
  cube2.position.y = 0
  cube2.position.z = 0
  scene.add(cube2)

  const cube3 = new Mesh(geometry, material)
  cube3.position.x = 0
  cube3.position.y = 0
  cube3.position.z = -10
  scene.add(cube3)

  const cube4 = new Mesh(geometry, material)
  cube4.position.x = 0
  cube4.position.y = 10
  cube4.position.z = 0
  scene.add(cube4)

  const lineMaterial = new LineBasicMaterial({ color: 0x000000 })
  const edges = new EdgesGeometry(geometry)
  
  const line1 = new LineSegments(edges, lineMaterial)
  line1.position.x = cube1.position.x
  line1.position.y = cube1.position.y
  line1.position.z = cube1.position.z
  scene.add(line1)

  const line2 = new LineSegments(edges, lineMaterial)
  line2.position.x = cube2.position.x
  line2.position.y = cube2.position.y
  line2.position.z = cube2.position.z
  scene.add(line2)

  const line3 = new LineSegments(edges, lineMaterial)
  line3.position.x = cube3.position.x
  line3.position.y = cube3.position.y
  line3.position.z = cube3.position.z
  scene.add(line3)

  const line4 = new LineSegments(edges, lineMaterial)
  line4.position.x = cube4.position.x
  line4.position.y = cube4.position.y
  line4.position.z = cube4.position.z
  scene.add(line4)

  const lights = [
    new PointLight(0xffffff, 1, 0),
    new PointLight(0xffffff, 1, 0),
    new PointLight(0xffffff, 1, 0)
  ]
  lights[0].position.set(0, 200, 0)
  lights[1].position.set(100, 200, 100)
  lights[2].position.set(-100, -200, -100)
  for (const light of lights) {
    light.lookAt(cube1.position)
    scene.add(light)
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()
}
