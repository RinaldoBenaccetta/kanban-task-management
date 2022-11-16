/**
 * Add style to html.
 */
import './assets/sass/styles.scss'

import React from 'react'
import { App } from './assets/ts/App'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

console.log('test')

root!.render(<App />)
