import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import Home from './components/Home'

const App = () => (
  <Home />
)

ReactDOM.render(<App />, document.getElementById('root'))