import { string, object } from 'yup'

let loginSchema = object().shape({
  email: string()
    .required('Email is required')
    .email('Please provide a valid email address'),
  password: string()
    .required('Password is required')
    .min(6, 'Password is too short.')
    .max(255, 'Password is too long'),
})

// Add newly created schemas to this object. This way you only
// expose one method `validateCredentials`.
const schemas = {
  login: loginSchema,
}

const validateCredentials = (schema, credentials) =>
  schemas[schema].validate(credentials, { abortEarly: false })

export default validateCredentials
