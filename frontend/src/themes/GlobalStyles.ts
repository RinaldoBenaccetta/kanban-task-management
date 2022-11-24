import { createGlobalStyle } from 'styled-components'
import { PropsThemeType } from '../@types/ThemesType'

const GlobalStyle = createGlobalStyle`
  body {
    // import are not advised by styled-components for now,
    // So fonts are imported in index.html instead.
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: ${(props: PropsThemeType) => props.theme.colors.text}
  }
`

export default GlobalStyle
