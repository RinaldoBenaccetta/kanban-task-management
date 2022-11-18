import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

export const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </ThemeProvider>
    )
}
