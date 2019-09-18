const apiClient = async (endpoint, { body, ...customConfig } = {}) => {
  const token = localStorage.getItem(process.env.REACT_APP_USER_TOKEN)
  const headers = { 'content-type': 'application/json' }

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
  return await res.json()
}

export default apiClient
