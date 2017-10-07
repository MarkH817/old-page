import React, {Component} from 'react'

export default class ProjectCard extends Component {
  render () {
    let optImage = null

    if (this.props.img) {
      optImage = (
        <img className='section media' src={this.props.img.url} alt={this.props.img.alt} />
      )
    }

    return (
      <div className='card'>
        <div className='section'>
          <h3>{this.props.title}</h3>
        </div>

        {optImage}

        <div className='section'>

          <p>{this.props.description}</p>

          <p><a href={this.props.url} target='_blank' rel='noopener'>View on GitHub</a></p>
        </div>
      </div>
    )
  }
}
