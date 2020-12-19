import React from 'react'

import './index.scss'

import Input from '../../components/input'
import Button from '../../components/button'

import { authenticate } from '../../services/user.service.js'

class LoginPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleLoginSubmit(ev) {
    ev.preventDefault()

    const { username, password } = this.state

    authenticate({ username, password })
      .then(date => {
        console.log('got response', date)
      })
      .catch(err => {
        console.error('error :(', err)
      })
  }

  handleUsernameChange(ev) {
    this.setState({
      username: ev.target.value
    })
  }

  handlePasswordChange(ev) {
    this.setState({
      password: ev.target.value
    })
  }

  render() {
    return <div className="login-page">

      <form onSubmit={this.handleLoginSubmit.bind(this)}>
        <Input
          required={true}
          placeholder="username"
          value={this.state.username}
          onChange={this.handleUsernameChange.bind(this)}
        />

        <Input
          placeholder="password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
        />

        <Button type="submit">login</Button>
      </form>
    </div>
  }
}

export default LoginPage