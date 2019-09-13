import React from 'react'

import Button from '../Button'
import TextField from '../TextField'

const Form = () => (
  <form>
    <TextField
      autofocus={true}
      label="Email"
      id="email"
      isRequired={true}
      name="email"
      type="email"
    />
    <TextField
      label="Password"
      id="password"
      isRequired={true}
      name="password"
      type="password"
    />
    <Button fullWidth={true}>Login</Button>
  </form>
)

export default Form
