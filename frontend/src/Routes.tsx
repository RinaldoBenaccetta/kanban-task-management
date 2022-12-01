import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './pages/App'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,
        // loader: rootLoader,
        // action: rootAction,
        children: [],
    },
])
