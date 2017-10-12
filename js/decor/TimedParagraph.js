import React, {Component} from 'react'

export default class TimedParagraph extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0,
      length: this.props.children.toString().length
    }

    this.reveal = this.reveal.bind(this)
  }

  componentDidMount () {
    let timeInterval = this.props.period / this.state.length || 50

    this.timerID = setInterval(() => {
      this.reveal()
    }, timeInterval)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  reveal () {
    this.setState(prevState => {
      if (prevState.counter >= prevState.length) {
        clearInterval(this.timerID)
        return {}
      } else {
        return {
          counter: prevState.counter + 1
        }
      }
    })
  }

  render () {
    return (
      <section>
        <p className='visually-hidden'>{this.props.children}</p>

        <p aria-hidden='true'>{this.props.children.toString().substring(0, this.state.counter)}</p>
      </section>
    )
  }
}
