import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'

export const defaultLabelStyles = `
  transform: translate(0,1.5rem) scale(1);
  cursor: text;
`
export const labelAboveInputStyles = `
  transform: translate(-0.2rem,0) scale(.75);
`
const Container = styled.div`
  position: relative;
  height: 3rem;
  color: ${({ theme: { brandBlack } }) => brandBlack};
  display: flex;
  margin: 1rem 0 0.5rem;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '250px')};
`
const Label = styled.label`
  font-size: 1rem;
  position: absolute;
  transition: transform 0.1s ease-in-out, color 0.1s ease-in-out;
  background-color: inherit;
  color: ${({ isInputFocused, theme: { brandBlack, brandTranslucentBlack } }) =>
    isInputFocused ? brandBlack : brandTranslucentBlack};
  ${({ isAboveInput }) =>
    isAboveInput ? labelAboveInputStyles : defaultLabelStyles};
`
const Required = styled.span`
  position: absolute;
  right: -0.6rem;
  top: 0;
`
const Input = styled.input`
  flex-grow: 1;
  height: 2rem;
  margin-top: 1rem;
  overflow-x: auto;
  text-overflow: ellipsis;
  background-color: inherit;
  outline: 0;
  border: 0;
  border-bottom: 1px solid;
  transition: border-color 0.1s ease-in-out;
  border-color: ${({
    isFocused,
    theme: { brandBlack, brandTranslucentBlack },
  }) => (isFocused ? brandBlack : brandTranslucentBlack)};
`

const TextField = ({
  autofocus = false,
  className,
  isFullWidth = true,
  isRequired = false,
  handleChange,
  id,
  label,
  name,
  type = 'text',
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)
  const theme = useContext(ThemeContext)
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <Container className={className}>
      <Label
        isAboveInput={
          isFocused || !!value || (inputRef.current && inputRef.current.value)
        }
        isInputFocused={isFocused}
        isRequired={isRequired}
        htmlFor={id}
      >
        {label}
        {isRequired && <Required>*</Required>}
      </Label>
      <Input
        autoFocus={autofocus}
        id={id}
        isFullWidth={isFullWidth}
        isFocused={isFocused}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={inputRef}
        required={isRequired}
        type={type}
        theme={theme}
        value={value}
      />
    </Container>
  )
}

TextField.propTypes = {
  autofocus: PropTypes.bool,
  className: PropTypes.string,
  isFullWidth: PropTypes.bool,
  handleChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
}

export default TextField
