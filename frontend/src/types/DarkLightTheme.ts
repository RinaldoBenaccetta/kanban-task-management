export type SubTheme = {
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
    dark: SubTheme
    light: SubTheme
}

export type Theme = {
    theme: SubTheme
}
