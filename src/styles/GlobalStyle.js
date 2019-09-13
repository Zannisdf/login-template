import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

  *, *:before, *:after{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
`

export default GlobalStyle
