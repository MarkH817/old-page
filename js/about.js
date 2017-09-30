import React, {Component} from 'react'
import {render} from 'react-dom'

class About extends Component {
  render () {
    return (
      <div>
        <h2>About</h2>

        <p>My name is Mark Hernandez. I develop for the web!</p>
      </div>
    )
  }
}

render(<About />, document.getElementById('root'))
