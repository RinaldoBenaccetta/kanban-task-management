type ThemeType = {
    type: 'dark' | 'light'
    colors: {
        backBackground: string
        frontBackground: string
        text: string
        accentLine: string
    }
    logo: string
}

export type ThemesType = {
    dark: ThemeType
    light: ThemeType
}

/**
 * Type used in props by styled-components.
 */
export type PropsThemeType = {
    theme: ThemeType
}
