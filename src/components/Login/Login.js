import React, { useState } from 'react'
import styled from 'styled-components'

import Form from './Form'
import Notification from '../Notification'

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

const Login = ({ login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

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
    setError('')
    setIsSent(true)
    login({ email, password })
      .then(() => setIsSent(false))
      .catch(e => {
        console.log(`Error while trying to log in: ${e.message}`)
        setError('Check your email or password and try again.')
        setIsSent(false)
      })
  }

  return (
    <Container>
      <Title>Log in</Title>
      <Form
        email={email}
        isSent={isSent}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
      <Notification message={error} />
    </Container>
  )
}

export default Login
