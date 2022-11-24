/**
 * Add style to html.
 */
// import './assets/sass/styles.scss'

import './css/normalize.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from './App'
import { ThemeContextProvider } from './hooks/ThemeContextProvider'
import { SelectedBoardProvider } from './hooks/SelectedBoardProvider'
import { BoardListProvider } from './hooks/BoardListProvider'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    /**
     * Nest the providers hooks here.
     */
    <QueryClientProvider client={queryClient}>
        <BoardListProvider>
            <SelectedBoardProvider>
                <ThemeContextProvider>
                    <App />
                </ThemeContextProvider>
            </SelectedBoardProvider>
        </BoardListProvider>
    </QueryClientProvider>
)
