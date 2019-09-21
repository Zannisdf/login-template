import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Calculate 0.2s of the total duration as a percentage for css animation
const getFramePercentage = (currentSecond, duration) =>
  (currentSecond * 100) / duration

const Container = styled.div`
  color: #fff;
  opacity: 0;
  padding: 0.8rem 1rem;
  margin: 1rem auto;
  border-radius: 4px;
  border: 1px solid rgba(221, 5, 0, 1);
  background-color: rgba(221, 5, 0, 0.5);
  ${({ isVisible, timeout }) =>
    timeout > 0
      ? isVisible && `animation: notification ${timeout}s linear;`
      : isVisible && `transition: opacity 0.2s ease-in-out; opacity: 1;`};

  @keyframes notification {
    0% {
      opacity: 0;
    }
    ${({ timeout }) => getFramePercentage(0.2, timeout)}% {
      opacity: 1;
    }
    ${({ timeout }) => getFramePercentage(timeout - 0.2, timeout)}% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const Notification = ({ message, timeout = 4 }) => (
  <Container isVisible={!!message} timeout={timeout}>
    {message}
  </Container>
)

Notification.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  timeout: PropTypes.number,
}

export default Notification
