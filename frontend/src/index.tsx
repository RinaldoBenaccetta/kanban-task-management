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
import { BoardsProvider } from './hooks/BoardsProvider'
import { BoardProvider } from './hooks/BoardProvider'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    /**
     * Nest the providers hooks here.
     */
    <QueryClientProvider client={queryClient}>
        <BoardsProvider>
            <SelectedBoardProvider>
                <BoardProvider>
                    <ThemeContextProvider>
                        <App />
                    </ThemeContextProvider>
                </BoardProvider>
            </SelectedBoardProvider>
        </BoardsProvider>
    </QueryClientProvider>
)
