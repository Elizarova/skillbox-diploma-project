import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Auth from '../containers/Auth'
import PhotoView from '../containers/PhotoView'
import PageNotFound from '../containers/PageNotFound'

const App = () => {
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

export default App
