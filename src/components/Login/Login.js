import React, { useState } from 'react'
import styled from 'styled-components'

import Form from './Form'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

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
      <Title>Log in</Title>
      <Form />
    </Container>
  )
}

export default Login
