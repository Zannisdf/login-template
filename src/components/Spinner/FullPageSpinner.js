import React from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
`

export const FullPageSpinner = () => {
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Container onClick={handleClick}>
      <Spinner />
    </Container>
  )
}
