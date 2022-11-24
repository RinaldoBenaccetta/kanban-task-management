type SubTheme = {
    type: 'dark' | 'light'
    colors: {
        backBackground: string
        frontBackground: string
        text: string
        accentLine: string
    }
    logo: string
}

export type DarkLightThemeType = {
    dark: SubTheme
    light: SubTheme
}

/**
 * Type used in props by styled-components.
 */
export type Theme = {
    theme: SubTheme
}
