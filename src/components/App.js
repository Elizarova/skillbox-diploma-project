import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsplashAuth } from '../actions'
import { unsplash } from '../api/unsplash'

import Home from '../containers/Home'
import Auth from '../containers/Auth'
import PhotoView from '../containers/PhotoView'
import PageNotFound from '../containers/PageNotFound'

const code = window.location.search.split('code=')[1]
// const code = '52a4fed212652f6aaf7f4f642d63303fc9b252675c2d34bc85e5ce7277b9fc01'

class App extends React.Component {
  componentDidMount() {
    this.props.unsplashAuth(code)
    unsplash.auth.setBearerToken(this.props.token)
  }

  render() {
    return (
      <Router>
        <div className="ui container" style={{ marginTop: '10px' }}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/">
              {/* <Redirect to="/auth" /> */}
              <Redirect to="/home" />
            </Route>
            <Route exact path="/auth" component={Auth} />
            <Route path="/photo/:id" component={PhotoView} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return { token: state.auth.token }
}

export default connect(
  mapStateToProps,
  { unsplashAuth }
)(App)
