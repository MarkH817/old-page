import React, {Component} from 'react'

export default class ProjectCard extends Component {
  render () {
    let optImage = null

    console.log(this.props.img)

    if (this.props.img) {
      optImage = (
        <img href={this.props.img.url} alt={this.props.img.alt} />
      )
    }

    return (
      <div className='card'>
        <div className='section'>
          <h3>{this.props.title}</h3>

          <p>{optImage}</p>

          <p>{this.props.description}</p>

          <p><a href={this.props.url}>View on GitHub</a></p>
        </div>
      </div>
    )
  }
}
