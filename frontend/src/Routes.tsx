import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './pages/App'
import { loader as appLoader } from './pages/App'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,
        loader: appLoader,
        // action: rootAction,
        children: [],
    },
])
