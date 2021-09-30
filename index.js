import { convertDegreesToRadians } from './unnamed/convertDegreesToRadians.js'
import { createFullDocumentCanvas } from './unnamed/createFullDocumentCanvas/createFullDocumentCanvas.js'

//  Coordinate system
//  y z x
//  \ | /

const ANGLE = convertDegreesToRadians(30)

class GeometricObject {
  constructor({size, position}) {
    this.size = size
    this.position = position
  }
}

class Cuboid extends GeometricObject {

}

export async function main() {
  const { canvas, context } = createFullDocumentCanvas()
  document.body.appendChild(canvas)

  const objects = [
    {
      size: {
        width: 100,
        length: 100,
        height: 100
      },
      position: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    {
      size: {
        width: 100,
        length: 100,
        height: 100
      },
      position: {
        x: 100,
        y: 0,
        z: 0
      }
    },
    {
      size: {
        width: 100,
        length: 100,
        height: 100
      },
      position: {
        x: 0,
        y: 100,
        z: 0
      }
    },
    {
      size: {
        width: 100,
        length: 100,
        height: 100
      },
      position: {
        x: 0,
        y: 0,
        z: 100
      }
    }
  ]

  setOriginViewportCenter()
  context.scale(1, -1)
  const sortedObjects = Array.from(objects)
  const C = 1000000
  sortedObjects.sort((a, b) => {
    const indexA = calculateIndex(a)
    const indexB = calculateIndex(b)
    return indexA - indexB
  })

  function calculateIndex(object) {
    const width = C
    const length = C
    const planeArea = width * length
    return (C - object.position.y) * length + (C - object.position.x) + object.position.z * planeArea
  }

  sortedObjects.forEach(renderObject)

  function setOriginViewportCenter() {
    const viewportCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
    context.translate(viewportCenter.x, viewportCenter.y)
  }

  /**
   * @param {GeometricObject} object
   */
  function renderObject(object) {
    context.fillStyle = 'white'

    const ox = object.position.x * Math.cos(ANGLE) +
      object.position.y * Math.cos(convertDegreesToRadians(180) - ANGLE)
    const oy = object.position.x * Math.sin(ANGLE) +
      object.position.y * Math.sin(convertDegreesToRadians(180) - ANGLE) +
      object.position.z

    {
      context.beginPath()
      context.moveTo(ox, oy)
      const x = ox + object.size.length * Math.cos(ANGLE)
      const y = oy + object.size.length * Math.sin(ANGLE)
      context.lineTo(x, y)
      context.lineTo(x, y + object.size.height)
      context.lineTo(ox, oy + object.size.height)
      context.closePath()
      context.fill()
      context.stroke()
    }
    {
      context.beginPath()
      context.moveTo(ox, oy)
      const angle = convertDegreesToRadians(180) - ANGLE
      const x = ox + object.size.width * Math.cos(angle)
      const y = oy + object.size.width * Math.sin(angle)
      context.lineTo(x, y)
      context.lineTo(x, y + object.size.height)
      context.lineTo(ox, oy + object.size.height)
      context.closePath()
      context.fill()
      context.stroke()
    }
    {
      context.beginPath()
      const x = ox
      const y = oy + object.size.height
      context.moveTo(x, y)
      const x2 = x + object.size.length * Math.cos(ANGLE)
      const y2 = y + object.size.length * Math.sin(ANGLE)
      context.lineTo(x2, y2)
      const x3 = x2 + object.size.width * Math.cos(convertDegreesToRadians(180) - ANGLE)
      const y3 = y2 + object.size.width * Math.sin(convertDegreesToRadians(180) - ANGLE)
      context.lineTo(x3, y3)
      context.lineTo(
        x3 + object.size.length * Math.cos(convertDegreesToRadians(180) + ANGLE),
        y3 + object.size.length * Math.sin(convertDegreesToRadians(180) + ANGLE)
      )
      context.closePath()
      context.fill()
      context.stroke()
    }
  }
}
