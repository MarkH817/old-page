import React, {Component} from 'react'
import {render} from 'react-dom'
import {EmailForm} from './decor'

class Contact extends Component {
  render () {
    return (
      <div>
        <h2>Contact</h2>

        <p><b>Email</b>: markedcode@gmail.com</p>

        <EmailForm email='markedcode@gmail.com' />
      </div>
    )
  }
}

render(<Contact />, document.getElementById('root'))
