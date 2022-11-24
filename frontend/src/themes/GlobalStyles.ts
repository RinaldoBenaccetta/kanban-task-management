import { createGlobalStyle } from 'styled-components'
import {Theme} from "../@types/DarkLightThemeType";

const GlobalStyle = createGlobalStyle`
  body {
    // import are not advised by styled-components for now,
    // So fonts are imported in index.html instead.
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: ${(props: Theme) => props.theme.colors.text}
  }
`

export default GlobalStyle
