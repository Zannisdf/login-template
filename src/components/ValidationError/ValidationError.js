import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.ul`
  padding: 0;
  margin: 0 0 0 1rem;
`

const ValidationError = ({ errors }) => (
  <Container>
    {errors.map((message, i) => (
      <li key={`error_${i}`}>{message}</li>
    ))}
  </Container>
)

ValidationError.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ValidationError
