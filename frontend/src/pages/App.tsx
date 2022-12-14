import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/GlobalStyles'
import Header from '../components/header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

import { themes } from '../themes/themes'
import { ThemeContext } from '../hooks/ThemeContextProvider'
import { ThemesType } from '../@types/ThemesType'
import { fetchAllBoards } from '../queries/fetchAllBoards'
import { Outlet, useLoaderData } from 'react-router-dom'
import { BoardsType } from '../@types/BoardsType'
import { SidebarShowButton } from '../components/Sidebar/SidebarShowButton'
import { useDispatch } from 'react-redux'

import {
    setBoardsQuantity,
    setListOfBoards,
} from '../features/board/boardSlice'

export async function loader(): Promise<BoardsType> {
    return await fetchAllBoards()
}

/**
 * The root of the app.
 *
 * @constructor
 */
export const App = () => {
    const theme = themes
    const boards: BoardsType = useLoaderData()

    const dispatch = useDispatch()

    dispatch(setListOfBoards(boards.list))
    dispatch(setBoardsQuantity(boards.quantity))

    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const { selectedTheme } = useContext(ThemeContext)

    return (
        // typescript need the code that is in bracket to don't have errors
        // when access object property with string.
        <ThemeProvider theme={theme[selectedTheme as keyof ThemesType]}>
            <GlobalStyle />
            <div>
                <Header></Header>
                <SidebarShowButton />
                <Outlet
                // This is where the called page is rendered
                />
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
