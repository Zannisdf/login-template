import React, { useState } from 'react'
import styled from 'styled-components'

import { useAuth } from '../../context/AuthContext'
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
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleEmailChange = e => {
    e.persist()
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    e.persist()
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <Container>
      <Title>Log in</Title>
      <Form
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default Login
