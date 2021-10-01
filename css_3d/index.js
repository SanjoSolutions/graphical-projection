export function createScene() {
  const $scene = document.createElement('div')
  $scene.classList.add('scene')
  $scene.style.position = 'relative'
  $scene.style.perspective = '400px'
  return $scene
}

export function renderCuboid(cuboid) {
  const $cuboid = document.createElement('div')
  $cuboid.classList.add('object')
  $cuboid.classList.add('cuboid')
  $cuboid.style.display = 'inline-block'
  $cuboid.style.width = `${cuboid.size.width}px`
  $cuboid.style.height = `${cuboid.size.height}px`
  $cuboid.style.position = 'absolute'
  $cuboid.style.transformStyle = 'preserve-3d'
  $cuboid.style.left = `${ cuboid.position.x }px`
  $cuboid.style.top = `${ -cuboid.position.z }px`
  $cuboid.style.transform = `translateZ(${-cuboid.position.y}px)`

  const $front = document.createElement('div')
  $front.classList.add('cuboid__face')
  $front.classList.add('cuboid__face--front')
  $front.style.position = 'absolute'
  $front.style.width = `${ cuboid.size.width }px`
  $front.style.height = `${ cuboid.size.height }px`
  $front.style.transform = `rotateY(0deg) translateZ(${0.5 * cuboid.size.length}px)`
  $cuboid.appendChild($front)

  const $back = document.createElement('div')
  $back.classList.add('cuboid__face')
  $back.classList.add('cuboid__face--back')
  $back.style.position = 'absolute'
  $back.style.width = `${ cuboid.size.width }px`
  $back.style.height = `${ cuboid.size.height }px`
  $back.style.transform = `rotateY(180deg) translateZ(${ 0.5 * cuboid.size.length }px)`
  $cuboid.appendChild($back)

  const $right = document.createElement('div')
  $right.classList.add('cuboid__face')
  $right.classList.add('cuboid__face--right')
  $right.style.position = 'absolute'
  $right.style.left = `${ 0.5 * (cuboid.size.width - cuboid.size.length) }px`
  $right.style.width = `${ cuboid.size.length }px`
  $right.style.height = `${ cuboid.size.height }px`
  $right.style.transform = `rotateY(90deg) translateZ(${ 0.5 * cuboid.size.width }px)`
  $cuboid.appendChild($right)

  const $left = document.createElement('div')
  $left.classList.add('cuboid__face')
  $left.classList.add('cuboid__face--left')
  $left.style.position = 'absolute'
  $left.style.left = `${ 0.5 * (cuboid.size.width - cuboid.size.length) }px`
  $left.style.width = `${ cuboid.size.length }px`
  $left.style.height = `${ cuboid.size.height }px`
  $left.style.transform = `rotateY(-90deg) translateZ(${ 0.5 * cuboid.size.width }px)`
  $cuboid.appendChild($left)

  const $top = document.createElement('div')
  $top.classList.add('cuboid__face')
  $top.classList.add('cuboid__face--top')
  $top.style.position = 'absolute'
  $top.style.top = `${ 0.5 * (cuboid.size.height - cuboid.size.length) }px`
  $top.style.width = `${ cuboid.size.width }px`
  $top.style.height = `${ cuboid.size.length }px`
  $top.style.transform = `rotateX(90deg) translateZ(${ 0.5 * cuboid.size.height }px)`
  $cuboid.appendChild($top)

  const $bottom = document.createElement('div')
  $bottom.classList.add('cuboid__face')
  $bottom.classList.add('cuboid__face--bottom')
  $bottom.style.position = 'absolute'
  $bottom.style.top = `${ 0.5 * (cuboid.size.height - cuboid.size.length) }px`
  $bottom.style.width = `${ cuboid.size.width }px`
  $bottom.style.height = `${ cuboid.size.length }px`
  $bottom.style.transform = `rotateX(-90deg) translateZ(${ 0.5 * cuboid.size.height }px)`
  $cuboid.appendChild($bottom)

  return $cuboid
}
