import React, { PropsWithChildren } from 'react'
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import { App } from './pages/App'
import { loader as appLoader } from './pages/App'
import Board from './components/board/Board'
import { loader as boardLoader } from './components/board/Board'
import ErrorPage from './pages/ErrorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: appLoader,

        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'board/:boardId', // this will not work : 1 level from base
                        element: <Board />,
                        loader: boardLoader,
                    },
                ],
            },
        ],
    },
])
