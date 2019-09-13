import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '../TextField'

const Container = styled.div``

const Login = () => {
  const [email, setEmail] = useState('')
  const handleChange = e => {
    e.persist()
    setEmail(e.target.value)
  }
  const handleSubmit = e => {
    // e.preventDefault()
    console.log()
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
      </form>
    </Container>
  )
}

export default Login
