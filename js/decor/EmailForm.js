import React, {Component} from 'react'

export default class EmailForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      website: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    console.log(this.state)
  }

  render () {
    return (
      <section>
        <form>
          <fieldset>
            <legend>Email Form</legend>
            <div className='input-group vertical'>
              <label htmlFor='form-name'>Name</label>
              <input id='form-name' type='text' name='name' onChange={this.handleChange} />
            </div>

            <div className='input-group vertical'>
              <label htmlFor='form-email'>Email</label>
              <input id='form-email' type='text' name='email' onChange={this.handleChange} />
            </div>

            <div className='input-group vertical'>
              <label htmlFor='form-website'>Website</label>
              <input id='form-website' type='text' name='website' onChange={this.handleChange} />
            </div>

            <div className='input-group vertical'>
              <label htmlFor='form-message'>Message</label>
              <textarea rows='5' id='form-message' type='text' name='message' onChange={this.handleChange} />
            </div>
          </fieldset>

          <button className='primary' onClick={this.handleSubmit}>Submit</button>
        </form>
      </section>
    )
  }
}
