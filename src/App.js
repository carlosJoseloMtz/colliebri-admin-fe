import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './global.scss';

import LoginPage from './pages/login-page'
import DashboardPage from './pages/dashboard-page'

import { isUserAuth } from './services/user.service'

const AuthRoute = (props) => {
  if (!isUserAuth()) {
    return <Redirect to="/login" />
  }

  return props.children
}

class App extends React.Component {

  constructor(props) {
    super(props)

    // TODO: update state with redux for authentication purposes
    this.state = {
      isAuthenticated: isUserAuth()
    }
  }

  handleAuthRender() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/dashboard"/>
    }

    return<Redirect to="/login"/>
  }

  render() {
    return <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={this.handleAuthRender.bind(this)}
          />
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/dashboard">
            <AuthRoute>
              <DashboardPage />
            </AuthRoute>
          </Route>
        </Switch>
      </Router>
    </div>
  }

}

export default App
