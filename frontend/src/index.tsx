/**
 * Add style to html.
 */
import './assets/sass/styles.scss'

import React from 'react'
import { App } from './components/App'
import { Sidebar } from './components/Sidebar/Sidebar'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(<Sidebar />)
