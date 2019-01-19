import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import unsplash from './api/unsplash'
import Home from './containers/Home'
import Auth from './containers/Auth'
import PhotoView from './containers/PhotoView'
import PageNotFound from './containers/PageNotFound'

class App extends React.Component {
  state = { photos: [], currentPage: 1 }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    unsplash
      .get('/photos/', {
        params: { page: this.state.currentPage },
      })
      .then(response => {
        this.setState({
          currentPage: this.state.currentPage + 1,
          photos: this.state.photos.concat(response.data),
        })
      })
      .catch(error => {
        console.log('Error happened during fetching!', error)
      })
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          <Route
            exact
            path="/auth"
            render={props => (
              <Auth
                {...props}
                photos={this.state.photos}
                loadData={this.loadData}
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
