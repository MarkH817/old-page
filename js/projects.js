import React, {Component} from 'react'
import {render} from 'react-dom'
import ProjectCard from './decor/ProjectCard'

const projectList = [
  {
    id: 0,
    title: 'Dye-Ameter',
    description: 'A color palette web app',
    url: 'https://github.com/MarkH817/dye-ameter'
  },
  {
    id: 1,
    title: 'Palette Ballot',
    description: 'An extension to quickly store and access colo(u)r palettes.',
    url: 'https://github.com/MarkH817/palette-ballot',
    img: {
      url: 'https://raw.githubusercontent.com/MarkH817/palette-ballot/master/app/images/icon-128.png',
      alt: 'Palette Ballot logo'
    }
  },
  {
    id: 2,
    title: 'SyncOrSwim',
    description: 'A simple, fast, and secure file syncing application.',
    url: 'https://github.com/QuentinCovert/SyncOrSwim',
    img: {
      url: 'https://raw.githubusercontent.com/QuentinCovert/SyncOrSwim/master/src/resources/syncOrSwimLogo.png',
      alt: 'Sync Or Swim logo'
    }
  }
]

class Projects extends Component {
  render () {
    let projects = this.props.list.map((item) => (
      <ProjectCard key={item.id} title={item.title} description={item.description} img={item.img} url={item.url} />
    ))

    return (
      <div>
        <h2>Projects</h2>

        <section className='row'>
          {projects}
        </section>
      </div>
    )
  }
}

render(<Projects list={projectList} />, document.getElementById('root'))
