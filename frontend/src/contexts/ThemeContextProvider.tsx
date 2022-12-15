import React, { createContext, PropsWithChildren, useState } from 'react'

import { defaultTheme } from '../themes/themes'
import { ThemeContextType } from '../@types/ThemeContextType'

/**
 * Returns the context for the theme.
 */
export const ThemeContext = createContext<ThemeContextType>({
    selectedTheme: defaultTheme,
})

/**
 * Provider of the theme.
 * The default theme is set according to the user dark mode preference in darkLightTheme.ts file
 *
 * The children type is found here : https://www.youtube.com/watch?v=UAf37Ph_AB8
 * The structure and type found here : https://felixgerschau.com/react-typescript-context/
 *
 * @param children
 * @constructor
 */
export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const [selectedTheme, setSelectedTheme] = useState(defaultTheme)

    // https://felixgerschau.com/react-typescript-context/
    const toggleDarkMode = () => {
        setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ selectedTheme, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
