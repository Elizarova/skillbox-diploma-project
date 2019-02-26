import React from 'react'
import PhotoList from '../components/PhotoList'

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsplashAuth } from '../actions'

const Auth = props => {
  if (props.token === undefined) {
    return (
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    )
  } else {
    console.log(props)
    return (
      <div>
        <PhotoList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { token: state.auth.token }
}

export default connect(
  mapStateToProps,
  { unsplashAuth }
)(Auth)
