import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../Button'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Congratulations = ({ logout, name }) => (
  <Container>
    <h1>Congratulations {name}!</h1>
    <p>You've signed in successfully.</p>
    <Button onClick={logout} fullWidth={false}>
      Sign out
    </Button>
  </Container>
)

Congratulations.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Congratulations
