import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const Congratulations = ({ name }) => (
  <div>
    <h1>Congratulations {name}!</h1>
    <p>You've signed in successfully.</p>
    <Button>Sign out</Button>
  </div>
)

Congratulations.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Congratulations