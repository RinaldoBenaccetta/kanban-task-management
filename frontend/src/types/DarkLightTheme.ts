export type Theme = {
    colors: {
        type: 'dark' | 'light'
        backBackground: string
        frontBackground: string
        text: string
        accentLine: string
    }
    logo: string
}

export type DarkLightTheme = {
    dark: Theme
    light: Theme
}
