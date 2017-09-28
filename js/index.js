import React, {Component} from 'react'
import {render} from 'react-dom'

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

setTimeout(() => {
  let splash = document.getElementById('splash')
  splash.classList.remove('invisible')
}, 250)
