import React from 'react'

const Options = ({ handleChange, handleActive, handleWall }) => {

  return (
    <article className="options">
      <div className="subtitle">ALGORITHM</div>
      <select name="algo" defaultValue="bfs" onChange={handleChange}>
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
        <option value="astar">A-STAR</option>
        <option value="dijkstra">DIJKSTRA</option>
      </select>
      <div className="subtitle">MAZE SIZE</div>
      <select name="size" defaultValue="small" onChange={handleChange}>
        <option value="small">SMALL</option>
        <option value="medium">MEDIUM</option>
        <option value="big">BIG</option>
      </select>
      <div className="button is-info">ADD WALL</div>
      <div className="button is-success" id="start" onClick={handleActive}>START</div>
      <div className="button is-danger" id="finish" onClick={handleActive}>FINISH</div>
    </article>
  )

}

export default Options