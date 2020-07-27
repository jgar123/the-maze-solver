import Vector from './vector'

function neighbourCells(grid, position) {
  const result = []
  result.push(
    { y: position.y, x: position.x + 1, value: position.value }, 
    { y: position.y, x: position.x - 1 , value: position.value }, 
    { y: position.y - 1, x: position.x, value: position.value }, 
    { y: position.y + 1, x: position.x, value: position.value }
  )

  return result.filter(coord => {
    return (coord.x  >= 0 && coord.x < grid.length) && 
      (coord.y >= 0 && coord.y < grid.length) && 
      coord.value !== 'wall'
  })

}

function bfs(gridState, startPosit, endPosit) {

  const grid = gridState.map(cell => new Vector(cell.y, cell.x))
  const start = new Vector(startPosit.y, startPosit.x)
  const end = new Vector(endPosit.y, endPosit.x)
  const queue = []

  queue.unshift(start)

  

}

export default bfs