class Vector {
  constructor(y, x, value) {
    this.y = y
    this.x = x
    this.discovered = false
    this.parent = null
    this.value = value
  }
}

export default Vector