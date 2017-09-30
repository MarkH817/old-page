import React, {Component} from 'react'
import {render} from 'react-dom'
import ProjectCard from './decor/ProjectCard'

class Projects extends Component {
  render () {
    let img = {
      url: 'https://raw.githubusercontent.com/MarkH817/palette-ballot/master/app/images/icon-128.png',
      alt: 'Palette Ballot logo'
    }

    return (
      <div>
        <h2>Projects</h2>

        <section className='row'>

          <ProjectCard title='Palette Ballot'
            description='
An extension to quickly store and access colo(u)r palettes.' img={img} url='https://github.com/MarkH817/palette-ballot' />
        </section>
      </div>
    )
  }
}

render(<Projects />, document.getElementById('root'))
