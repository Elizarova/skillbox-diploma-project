import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toJson } from 'unsplash-js'
import unsplash from './api/unsplash'
import Home from './containers/Home'
import Auth from './containers/Auth'
import PhotoView from './containers/PhotoView'
import PageNotFound from './containers/PageNotFound'

const code = window.location.search.split('code=')[1]
//const code = '9541234c2d3d3d073a1c88730f078ca5abebcad54008611b67e292597254d9dc'

class App extends React.Component {
  state = { photos: [], currentPage: 1, perPage: 10 }

  componentDidMount() {
    return unsplash.auth
      .userAuthentication(code)
      .then(toJson)
      .then(json => {
        unsplash.auth.setBearerToken(json.access_token)
        unsplash.photos
          .listPhotos(1, this.state.perPage, 'latest')
          .then(toJson)
          .then(json => {
            this.setState({
              //currentPage: this.state.currentPage + 1,
              photos: json,
              perPage: this.state.perPage + 10,
            })
          })
      })
  }

  onClickLodeMore = () => {
    return unsplash.photos
      .listPhotos(1, this.state.perPage, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          // currentPage: this.state.currentPage + 1,
          photos: json,
          perPage: this.state.perPage + 10,
        })
      })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact
            path="/auth"
            render={props => (
              <Auth
                {...props}
                photos={this.state.photos}
                onClickLodeMore={this.onClickLodeMore}
              />
            )}
          />
          <Route
            path="/photo/:id"
            render={props => (
              <PhotoView {...props} photos={this.state.photos} />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
