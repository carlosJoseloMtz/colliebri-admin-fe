import constants from './constants.json'
import { call } from './http.service.js'

const api = process.env.REACT_APP_API_DOMAIN

const isUserAuth = () => {
  return localStorage.getItem(constants.session.tokenName) === true
}

const authenticate = ({ username, password }) => {
  console.log('api value', api)
  return call(`${api}/admin/users/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
}

export { isUserAuth, authenticate }