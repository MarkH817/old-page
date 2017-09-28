import React from 'react'
import {render} from 'react-dom'

setTimeout(() => {
  let splash = document.getElementById('splash')
  splash.classList.remove('invisible')
}, 250)

render(<h1>Hey!</h1>, document.getElementById('root'))
