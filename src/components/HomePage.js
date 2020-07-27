import React, { useState } from 'react'
import Cell from './Cell'
import bfs from '../bfs'

function xAndY(idx, w) {
  const x = idx % w
  const y = (idx - x) / w
  return {
    x,
    y
  }
}

const initialGrid = []

for (let i = 0; i < 390; i++) {
  initialGrid.push(xAndY(i, 26))
}

const HomePage = () => {

  const [grid, setGrid] = useState(initialGrid)
  const [startClicked, setStartClicked] = useState(false)
  const [endClicked, setEndClicked] = useState(false)
  const [startPosition, setStartPosition] = useState({ y: null, x: null })
  const [endPosition, setEndPosition] = useState({ y: null, x: null })
  const [path, setPath] = useState([{ y: null, x: null }])
  const [chosenAlgo, setChosenAlgo] = useState('bfs')

  function generatePath() {
    if (chosenAlgo === 'bfs') {
      bfs(grid, startPosition, endPosition)
    }
  }

  function handleChange(e) {
    setChosenAlgo(e.target.value)
  }

  return <section className="home">
    <div className="options">
      <div className="start-button" onClick={() => setStartClicked(!startClicked)}>START</div>
      <div className="finish-button" onClick={() => setEndClicked(!endClicked)}>FINISH</div>
      <div className="run" onClick={generatePath}>RUN</div>
      <select onChange={handleChange}>
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
        <option value="astar">Astar</option>
        <option value="djikstra">Djikstra</option>
      </select>
    </div>
    <div className="grid">
      {grid.map((cell, i) => {

        return <Cell 
          key={i} 
          cell={cell}
          startPosition={startPosition}
          endPosition={endPosition}
          startClicked={startClicked}
          endClicked={endClicked}
          setStartClicked={setStartClicked}
          setEndClicked={setEndClicked}
          setStartPosition={setStartPosition}
          setEndPosition={setEndPosition}
          path={path}
        />

      })}
    </div>
  </section>
}

export default HomePage