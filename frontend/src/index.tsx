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
import { AppValuesProvider } from './hooks/AppValuesProvider'
import { Provider } from 'react-redux'
import store from './app/store'

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
            <ThemeContextProvider>
                <Provider store={store}>
                    <RouterProvider router={router}></RouterProvider>
                </Provider>
            </ThemeContextProvider>
        </AppValuesProvider>
    </QueryClientProvider>
)
