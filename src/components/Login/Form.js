import React from 'react'

import Button from '../Button'
import TextField from '../TextField'

const Form = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <TextField
      autofocus={true}
      label="Email"
      id="email"
      isRequired={true}
      name="email"
      type="email"
      handleChange={handleEmailChange}
      value={email}
    />
    <TextField
      label="Password"
      id="password"
      isRequired={true}
      name="password"
      type="password"
      handleChange={handlePasswordChange}
      value={password}
    />
    <Button fullWidth={true} type="submit">
      Login
    </Button>
  </form>
)

export default Form
