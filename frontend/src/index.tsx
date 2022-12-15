/**
 * Add style to html.
 */
import './css/normalize.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContextProvider'
import { Provider } from 'react-redux'
import { store } from './app/store'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    /**
     * Nest the providers contexts here.
     */
    <QueryClientProvider client={queryClient}>
        {/*use context for themes instead of redux just for exemple to use context.*/}
        <ThemeContextProvider>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </ThemeContextProvider>
    </QueryClientProvider>
)
