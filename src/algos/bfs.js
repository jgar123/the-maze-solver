function neighbourCells(m, v) {

  const result = []
  result.push(
    { y: v.y, x: v.x + 1, value: v.value }, 
    { y: v.y, x: v.x - 1 , value: v.value }, 
    { y: v.y - 1, x: v.x, value: v.value }, 
    { y: v.y + 1, x: v.x, value: v.value }
  )

  return result.filter(coord => {
    return (coord.x  >= 0 && coord.x < m.length) && 
      (coord.y >= 0 && coord.y < m.length) && 
      coord.value !== 'wall'
  })

}

function bfs(m, s, f) {
  
  const q = []
  const start = s
  start.discovered = true
  q.push(start)

  while (q.length > 0) {

    const v = q.pop()

    if (v.y === f.y && v.x === f.x) {
      return v
    }

    const neighbours = neighbourCells(m, v)
    neighbours.forEach(coord => {
      if (m[coord.y][coord.x].discovered === false) {
        m[coord.y][coord.x].discovered = true
        m[coord.y][coord.x].parent = v
        q.unshift(m[coord.y][coord.x])
      }
    })

  }


}

export { bfs }