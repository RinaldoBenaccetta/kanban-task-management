/**
 * Add style to html.
 */
import './css/normalize.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes } from './Routes'
import { RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './hooks/ThemeContextProvider'
import { BoardsProvider } from './hooks/BoardsProvider'

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = container ? createRoot(container) : null

root!.render(
    /**
     * Nest the providers hooks here.
     */
    <QueryClientProvider client={queryClient}>
        <BoardsProvider>
            <ThemeContextProvider>
                <RouterProvider router={Routes} />
            </ThemeContextProvider>
        </BoardsProvider>
    </QueryClientProvider>
)

// root!.render(
//     /**
//      * Nest the providers hooks here.
//      */
//     <QueryClientProvider client={queryClient}>
//         <BoardsProvider>
//             <SelectedBoardProvider>
//                 <BoardProvider>
//                     <ThemeContextProvider>
//                         <App />
//                     </ThemeContextProvider>
//                 </BoardProvider>
//             </SelectedBoardProvider>
//         </BoardsProvider>
//     </QueryClientProvider>
// )
