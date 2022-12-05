/**
 * Add style to html.
 */
import './css/normalize.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './hooks/ThemeContextProvider'
import { BoardsProvider } from './hooks/BoardsProvider'
import { SelectedBoardProvider } from './hooks/SelectedBoardProvider'
import { AppValuesProvider } from './hooks/AppValuesProvider'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    /**
     * Nest the providers hooks here.
     */
    <QueryClientProvider client={queryClient}>
        {/*todo: add a provider for app like sidebar toggle and others.*/}
        <AppValuesProvider>
            <BoardsProvider>
                <SelectedBoardProvider>
                    <ThemeContextProvider>
                        <RouterProvider router={router}></RouterProvider>
                    </ThemeContextProvider>
                </SelectedBoardProvider>
            </BoardsProvider>
        </AppValuesProvider>
    </QueryClientProvider>
)
