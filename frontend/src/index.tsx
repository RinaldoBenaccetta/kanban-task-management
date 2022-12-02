/**
 * Add style to html.
 */
import './css/normalize.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './hooks/ThemeContextProvider'
import { BoardsProvider } from './hooks/BoardsProvider'
import { SelectedBoardProvider } from './hooks/SelectedBoardProvider'
import { App, loader as appLoader } from './pages/App'
import ErrorPage from './pages/ErrorPage'
import Board, { loader as boardLoader } from './components/board/Board'

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
                <ThemeContextProvider>
                    <RouterProvider router={router}></RouterProvider>
                </ThemeContextProvider>
            </SelectedBoardProvider>
        </BoardsProvider>
    </QueryClientProvider>
)
