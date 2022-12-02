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

// export const Routes = createBrowserRouter(
//     createRoutesFromElements(
//         <Route
//             path="/"
//             element={<App />}
//             loader={appLoader}
//             // action={rootAction}
//             errorElement={<ErrorPage />}
//         >
//             <Route errorElement={<ErrorPage />}>
//                 {/*<Route index element={<Index />} />*/}
//                 <Route
//                     path="board/:boardId"
//                     element={<Board />}
//                     loader={boardLoader}
//                     // action={contactAction}
//                 />
//             </Route>
//         </Route>
//     )
// )

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: appLoader,
        // action: rootAction,

        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: ':boardId',
                        element: <Board />,
                        loader: boardLoader,
                        // action: contactAction,
                    },
                ],
            },
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'board/:boardId',
                        element: <Board />,
                        loader: boardLoader,
                        // action: contactAction,
                    },
                ],
            },
        ],
    },
    {
        path: 'board/test',
        element: <Board />,
        loader: boardLoader,
        // action: contactAction,
    },
])
