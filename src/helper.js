function howBig(str) {
  if (str === 'small') {
    return 20
  } else if (str === 'medium') {
    return 40
  } else if (str === 'big') {
    return 60
  }
}

function mapRoute(c) {

  const result = []
  while (c.value !== 'start') {
    result.push(c)
    c = c.parent
  }

  return result.reverse()
}

class Vector {
  constructor(y, x, value) {
    this.y = y
    this.x = x
    this.discovered = false
    this.parent = null
    this.value = value
  }
}

export { howBig, mapRoute, Vector }