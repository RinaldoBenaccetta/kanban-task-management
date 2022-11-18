/**
 * Add style to html.
 */
// import './assets/sass/styles.scss'

import './css/normalize.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from './components/App'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)
