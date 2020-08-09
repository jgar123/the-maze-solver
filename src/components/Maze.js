import React, { useState, useEffect } from 'react'
import { mapRoute, Vector } from '../helper'
import { bfs } from '../algos/bfs'
import useInterval from './UseInterval'

const Maze = ({ mazeSize, algo, startActive, finishActive, setStartActive, setFinishActive }) => {

  const [maze, setMaze] = useState([])
  const [cellSize, setCellSize] = useState({ h: 0, w: 0 })
  const [isRunning, setIsRunning] = useState(false)
  const [route, setRoute] = useState([])
  const [start, setStart] = useState()
  const [finish, setFinish] = useState()

  function handleClick(c) {
    const local = [ ...maze ]
    if (startActive) {
      local[c.y][c.x].value = 'start'
      setStart(local[c.y][c.x])
      setMaze(local)
      setStartActive(false)
    } else if (finishActive) {
      local[c.y][c.x].value = 'finish'
      setFinish(local[c.y][c.x])
      setMaze(local)
      setFinishActive(false)
    }
  }

  function handleSolve() {
    const r = mapRoute(bfs([ ...maze ], start, finish))
    setRoute(r)
    setIsRunning(true)
  }

  useEffect(() => {

    const result = []
    for (let y = 0; y < mazeSize; y++) {
      const temp = []
      for (let x = 0; x < mazeSize; x++) {
        temp.push(new Vector(y, x, 'cell'))
      }
      result.push(temp)
    }
    setMaze(result)

    if (mazeSize === 20) {
      setCellSize({ h: '5%', w: '5%' })
    } else if (mazeSize === 40) {
      setCellSize({ h: '2.5%', w: '2.5%' })
    } else if (mazeSize === 60) {
      setCellSize({ h: '1.65%', w: '1.65%' })
    }

  }, [mazeSize || algo])

  useInterval(() => {
    const local = [ ...maze ]
    const localRoute = [ ...route ]
    local[route[0].y][route[0].x].value = 'route'
    localRoute.shift()
    setRoute(localRoute)
    setMaze(local)
    if (localRoute.length === 0) {
      setIsRunning(false)
    }
  }, isRunning ? 1 : null)

  return (
    <>
    <div className="button" onClick={handleSolve}>SOLVE MAZE</div>
    <section className="maze">
      {maze.map((row) => {
        return row.map((cell, i) => {
          return (
            <div style={{ height: cellSize.h, width: cellSize.w }} 
              className={cell.value} 
              key={i} 
              onClick={() => handleClick(cell)}
            > 
            </div>
          )
        })
      })}
    </section>
    </>
  )

}

export default Maze