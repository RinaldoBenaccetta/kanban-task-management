import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/GlobalStyles'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'

import darkLightTheme from '../themes/darkLightTheme'

// https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
export const App = () => {
    return (
        <ThemeProvider theme={darkLightTheme.light}>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
