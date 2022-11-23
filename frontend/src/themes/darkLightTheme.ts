import Colors from './variables/colors'

// @ts-ignore
import DarkLogo from '../assets/img/logo-dark.svg'
// @ts-ignore
import lightLogo from '../assets/img/logo-light.svg'
import { createContext } from 'react'
import { Theme } from '../types/DarkLightTheme'

export const darkLightTheme = {
    dark: {
        type: 'dark',
        colors: {
            backBackground: Colors.grey.veryDarkGrey,
            frontBackground: Colors.grey.darkGrey,
            text: Colors.white,
            accentLine: Colors.grey.linesDark,
        },
        logo: lightLogo,
    },
    light: {
        type: 'light',
        colors: {
            backBackground: Colors.grey.lightGrey,
            frontBackground: Colors.white,
            text: Colors.black,
            accentLine: Colors.grey.linesLight,
        },
        logo: DarkLogo,
    },
}

export const ThemeContext: React.Context<Theme> = createContext(
    darkLightTheme.dark
)
