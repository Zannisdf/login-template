import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.button`
  height: 2.5rem;
  transition: background-color 0.1s ease-in-out;
  min-width: 200px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border: 1px solid transparent;
  border-radius: 4px;
  margin-top: 1rem;
  font-size: 0.9rem;
  outline: 0;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  ${({ theme: { buttons }, variant }) => {
    const { bg, color, hover, outline } = buttons[variant] || buttons.primary
    return `
      background-color: ${bg};
      color: ${color};
      &:hover {
        background-color: ${hover};
      }
      &:focus {
        border-color: ${outline};
      }
      &:active {
        border-bottom: 0px;
        border-top-width: 2px;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -2px rgba(0, 0, 0, 0.12);
      }
    `
  }}
`

const Button = ({
  children,
  className,
  fullWidth = true,
  onClick,
  type = 'button',
  variant = 'primary',
}) => (
  <Container
    className={className}
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
    variant={variant}
  >
    {children}
  </Container>
)

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
}

export default Button
