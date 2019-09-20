const apiClient = async (endpoint, { body, ...customConfig } = {}) => {
  const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN)
  const headers = { 'Content-Type': 'application/json' }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const res = await window.fetch(
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    config
  )

  if (!res.ok) {
    throw new Error('An error has ocurred, please try again')
  }

  return await res.json()
}

export default apiClient
