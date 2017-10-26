import React, {Component} from 'react'
import {post} from '../utils'

export default class EmailForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      website: '',
      message: '',
      sent: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  valid () {
    return !(this.state.name.trim() === '') &&
      !(this.state.email.trim() === '') &&
      !(this.state.message.trim() === '')
  }

  handleChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    if (!this.valid()) {
      return
    }

    let url = `https://formspree.io/${this.props.email}`
    let data = {
      email: this.state.email.trim(),
      _subject: `${this.state.name.trim()} | Contact | Portfolio`,
      _format: 'plain',
      message: `${this.state.name.trim()} ${this.state.website.trim()}
      ${new Date().toString()}

      ${this.state.message.trim()}`
        .split('\n').map(line => line.trim()).join('\n')
    }

    post(url, data)
      .then(result => {
        this.setState({
          sent: true
        })
      })
  }

  render () {
    return (
      <section>
        <form>
          <fieldset>
            <legend>Email Form</legend>
            <div className='input-group vertical'>
              <label htmlFor='form-name'>Name</label>
              <input id='form-name' type='text' name='name' onChange={this.handleChange} disabled={this.state.sent} />
            </div>

            <div className='input-group vertical'>
              <label htmlFor='form-email'>Email</label>
              <input id='form-email' type='text' name='email' onChange={this.handleChange} disabled={this.state.sent} />
            </div>

            <div className='input-group vertical'>
              <label htmlFor='form-website'>Website</label>
              <input id='form-website' type='text' name='website' onChange={this.handleChange} disabled={this.state.sent} />
            </div>

            <div className='input-group vertical'>
              <label htmlFor='form-message'>Message</label>
              <textarea rows='5' id='form-message' type='text' name='message' onChange={this.handleChange} disabled={this.state.sent} />
            </div>
          </fieldset>

          <button className='primary' onClick={this.handleSubmit} disabled={this.state.sent}>Submit</button>
        </form>
      </section>
    )
  }
}
