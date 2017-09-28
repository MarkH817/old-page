import React, {Component} from 'react'
import {render} from 'react-dom'

class Contact extends Component {
  render () {
    return (
      <div>
        <h2>Contact</h2>
      </div>
    )
  }
}

render(<Contact />, document.getElementById('root'))
