import styled from 'styled-components'

import defaultTheme from '../../styles/defaultTheme'

const { brandTranslucentBlack: black } = defaultTheme

const Spinner = styled.div`
  height: 64px;
  width: 64px;
  border: 5px solid;
  border-radius: 100%;
  border-color: ${black} transparent ${black} transparent;
  animation: loading 1.2s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
