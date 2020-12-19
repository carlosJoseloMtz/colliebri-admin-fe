
const SUCCESS_STATUS = [200, 201]

const call = (url, options) => {

  let headers = null

  if (options.headers) {
    headers = { ...options.headers }
  } else {
    headers = {
      'Content-Type': 'application/json'
    }
  }


  return fetch(url, {
    ...options,
    credentials: 'include',
    headers
  })
    .then(async (res) => {
      const status = res.status

      const response = await res.json()
      if (SUCCESS_STATUS.indexOf(status) === -1) {
        throw new Error(response.message || 'server error')
      }

      return response
    })
}

export { call }