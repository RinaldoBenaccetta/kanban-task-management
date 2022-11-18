import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    // import are not advised by styled-components for now,
    // So fonts are imported in index.html instead.
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`

export default GlobalStyle
