import React, { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/GlobalStyles'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'

import { darkLightTheme, ThemeContext } from '../themes/darkLightTheme'

// https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
export const App = () => {
    const theme = useContext(ThemeContext)

    const switchTheme = () => {
        setWindowTheme((prevTheme) => ({
            theme:
                prevTheme.theme === darkLightTheme.dark
                    ? darkLightTheme.light
                    : darkLightTheme.dark,
            switchTheme,
        }))
    }

    const [windowTheme, setWindowTheme] = useState({
        theme: darkLightTheme.dark,
        switchTheme,
    })

    console.log(windowTheme)

    return (
        <ThemeContext.Provider value={windowTheme}>
            <ThemeProvider theme={windowTheme.theme}>
                <GlobalStyle />
                <div>
                    <Header></Header>
                    <Sidebar></Sidebar>
                </div>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
