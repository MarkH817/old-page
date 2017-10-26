import React, {Component} from 'react'
import {render} from 'react-dom'
import {sleep} from './utils'

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

render(<Home />, document.getElementById('root'))

sleep(250)
  .then(() => {
    let splash = document.getElementById('splash')
    splash.classList.remove('invisible')
  })
