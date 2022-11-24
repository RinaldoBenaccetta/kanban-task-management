import { createContext } from 'react'

import Colors from './variables/colors'

// @ts-ignore
import DarkLogo from '../assets/img/logo-dark.svg'
// @ts-ignore
import lightLogo from '../assets/img/logo-light.svg'

import isBrowserIsDarkMode from '../helpers/isBrowserIsDarkMode'

/**
 * Set default theme according to the user dark mode preference.
 */
export const defaultTheme = isBrowserIsDarkMode ? 'dark' : 'light'

/**
 * Settings for the dark and light themes.
 */
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
