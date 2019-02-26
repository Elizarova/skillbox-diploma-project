import React from 'react'
import PhotoList from '../components/PhotoList'
import { connect } from 'react-redux'
import { unsplashAuth } from '../actions'
import { Route, Redirect } from 'react-router-dom'

const Auth = props => {
  if (props.token === undefined) {
    return (
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    )
  } else {
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
