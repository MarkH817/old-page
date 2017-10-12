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

  handleChange () {

  }

  handleSubmit () {

  }

  render () {
    let emailTo = `mailto:${this.props.email}`

    return (
      <section>
        <form action={emailTo} enctype='text/plain'>
          <fieldset>
            <legend>Email Form</legend>
            <div className='input-group vertical'>
              <label for='form-name'>Name</label>
              <input id='form-name' type='text' />
            </div>

            <div className='input-group vertical'>
              <label for='form-email'>Email</label>
              <input id='form-email' type='text' />
            </div>

            <div className='input-group vertical'>
              <label for='form-website'>Website</label>
              <input id='form-website' type='text' />
            </div>

            <div className='input-group vertical'>
              <label for='form-message'>Message</label>
              <input id='form-message' type='text' />
            </div>
          </fieldset>
          <button className='primary'>Submit</button>
        </form>
      </section>
    )
  }
}
