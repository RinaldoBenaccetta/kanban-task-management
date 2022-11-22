import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/GlobalStyles'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

// https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
export const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
