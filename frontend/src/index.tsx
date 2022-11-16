/**
 * Add style to html.
 */
import './assets/sass/styles.scss'

import React from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    <QueryClientProvider client={queryClient}>
        <Sidebar />
    </QueryClientProvider>
)
