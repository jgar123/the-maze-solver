import React from 'react'

const Cell = ({ cell, startPosition, endPosition, startClicked, endClicked, setStartClicked, setEndClicked, setStartPosition, setEndPosition, path }) => {

  function handleCellClick(e) {
    const loc = e.target.id.split(',')
    if (startClicked) {
      const coords = {
        y: parseInt(loc[0]),
        x: parseInt(loc[1])
      }
      setStartPosition(coords)
      setStartClicked(!startClicked)
    } else if (endClicked) {
      const coords = {
        y: parseInt(loc[0]),
        x: parseInt(loc[1])
      }
      setEndPosition(coords)
      setEndClicked(!endClicked)
    }
  }

  function includesPath(y, x) {
    for (let i = 0; i < path.length; i++) {
      if (path[i].y === y && path[i].x === x) {
        return true
      }
    }
    return false
  }

  return <div
    id={`${cell.y},${cell.x}`}
    className={cell.y === startPosition.y && cell.x === startPosition.x ? 'start' :
      cell.y === endPosition.y && cell.x === endPosition.x ? 'end' :
        includesPath(cell.y, cell.x) ? 'path' :
          'cell'
    }
    onClick={handleCellClick}
  >
  </div>

}

export default Cell