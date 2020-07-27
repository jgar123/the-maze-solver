import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import HomePage from './components/HomePage'

const App = () => (
  <HomePage />
)

ReactDOM.render(<App />, document.getElementById('root'))