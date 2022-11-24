import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './themes/GlobalStyles'
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import { themes } from './themes/themes'
import { ThemeContext } from './hooks/ThemeContextProvider'
import { DarkLightThemeType } from './@types/DarkLightThemeType'

/**
 * The root of the app.
 *
 * @constructor
 */
export const App = () => {
    const theme = themes

    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const { selectedTheme } = useContext(ThemeContext)

    return (
        // typescript need the code that is in bracket to don't have errors
        // when access object property with string.
        <ThemeProvider theme={theme[selectedTheme as keyof DarkLightThemeType]}>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
