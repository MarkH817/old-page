import React, {Component} from 'react'
import {render} from 'react-dom'
import {TimedParagraph as TimedText} from './decor'

class About extends Component {
  render () {
    return (
      <div>
        <h2>About</h2>

        <TimedText period={500}>
          My name is Mark Hernandez. I develop for the web!
        </TimedText>
      </div>
    )
  }
}

render(<About />, document.getElementById('root'))
