import React, { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './themes/GlobalStyles'
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import { darkLightTheme, ThemeContext } from './themes/darkLightTheme'
import { ThemeContext } from './hooks/ThemeContextProvider'

/**
 * The root of the app.
 *
 * @constructor
 */
export const App = () => {
    const theme = darkLightTheme

    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const { windowTheme } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme[windowTheme]}>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
