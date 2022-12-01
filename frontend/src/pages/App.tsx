import React, { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/GlobalStyles'
import Header from '../components/header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

import { themes } from '../themes/themes'
import { ThemeContext } from '../hooks/ThemeContextProvider'
import { ThemesType } from '../@types/ThemesType'
import { fetchAllBoards } from '../queries/fetchAllBoards'
import { useLoaderData } from 'react-router-dom'
import { BoardsType } from '../@types/BoardsType'
import { BoardsContext } from '../hooks/BoardsProvider'

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
    const boards = useLoaderData()

    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const { selectedTheme } = useContext(ThemeContext)

    const { boardList, setBoardsList } = useContext(BoardsContext)

    useEffect(() => {
        if (setBoardsList) {
            setBoardsList(boards)
        }
    }, [boards])

    return (
        // typescript need the code that is in bracket to don't have errors
        // when access object property with string.
        <ThemeProvider theme={theme[selectedTheme as keyof ThemesType]}>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
