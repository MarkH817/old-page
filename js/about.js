import React, {Component} from 'react'
import {render} from 'react-dom'

class About extends Component {
  render () {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

render(<About />, document.getElementById('root'))
