import React, { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/GlobalStyles'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'

import {
    darkLightTheme,
    defaultTheme,
    ThemeContext,
} from '../themes/darkLightTheme'

export const App = () => {
    const theme = darkLightTheme

    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const [windowTheme, setWindowTheme] = useState(defaultTheme)

    return (
        <ThemeContext.Provider value={{ windowTheme, setWindowTheme }}>
            <ThemeProvider theme={theme[windowTheme]}>
                <GlobalStyle />
                <div>
                    <Header></Header>
                    <Sidebar></Sidebar>
                </div>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
