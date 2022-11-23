import React, { PropsWithChildren, useState } from 'react'

import { defaultTheme, ThemeContext } from '../themes/darkLightTheme'

/**
 * Provider of the theme.
 * The default theme is set according to the user dark mode preference in darkLightTheme.ts file
 *
 * The children type is found here : https://www.youtube.com/watch?v=UAf37Ph_AB8
 *
 * @param children
 * @constructor
 */
export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const [windowTheme, setWindowTheme] = useState(defaultTheme)

    return (
        <ThemeContext.Provider value={{ windowTheme, setWindowTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
