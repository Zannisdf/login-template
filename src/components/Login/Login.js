import React, { useState } from 'react'
import styled from 'styled-components'

import Form from './Form'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 10%;
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
      <Form />
    </Container>
  )
}

export default Login
