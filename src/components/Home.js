import React, { useState } from 'react'
import Maze from './Maze'
import Options from './Options'
import { howBig } from '../helper'

const Home = () => {

  const [algo, setAlgo] = useState('bfs')
  const [mazeSize, setMazeSize] = useState('small')
  const [startActive, setStartActive] = useState(false)
  const [finishActive, setFinishActive] = useState(false)

  function handleChange(e) {
    if (e.target.name === 'algo') {
      setAlgo(e.target.value)
    } else {
      setMazeSize(e.target.value)
    }
  }

  function handleActive(e) {
    if (e.target.id === 'start' && !startActive) {
      setStartActive(true)
      setFinishActive(false)
    } else if (e.target.id === 'finish' && !finishActive) {
      setFinishActive(true)
      setStartActive(false)
    }
  }

  return (
    <>
      <div className="title">THE MAZE SOLVER</div>
      <Options 
        handleChange={handleChange}
        handleActive={handleActive}
      />
      <Maze 
        mazeSize={howBig(mazeSize)} 
        algo={algo}
        startActive={startActive}
        finishActive={finishActive}
        setStartActive={setStartActive}
        setFinishActive={setFinishActive}
      />
    </>
  )

}

export default Home