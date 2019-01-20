import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { toJson } from 'unsplash-js'
import unsplash from './api/unsplash'
import Home from './containers/Home'
import Auth from './containers/Auth'
import PhotoView from './containers/PhotoView'
import PageNotFound from './containers/PageNotFound'

// let code = '884c90f362fb7fa1171e44698604ff6defa28a084999f1890c79245e457d455d'
const code = window.location.search.split('code=')[1]

class App extends React.Component {
  state = { photos: [], currentPage: 1 }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    const userAuthentication = code => {
      return unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token)
          console.log(json)
          unsplash.photos
            .listPhotos(this.state.currentPage, 4, 'latest')
            .then(toJson)
            .then(json => {
              this.setState({
                currentPage: this.state.currentPage + 1,
                photos: this.state.photos.concat(json),
              })

              console.log('loadData', json)
            })
        })
    }
    userAuthentication(code)
  }

  onClickLike = photo => {
    const userAuthentication = code => {
      return unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token)

          unsplash.photos.likePhoto(photo.id)
          console.log(json)
        })
        .catch(err => console.log(err))
    }
    userAuthentication(code)
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
                loadData={this.loadData}
              />
            )}
          />
          <Route
            path="/photo/:id"
            render={props => (
              <PhotoView
                {...props}
                photos={this.state.photos}
                onClickLike={this.onClickLike}
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default App

// loadData = () => {
//   unsplash
//     .get('/photos/', {
//       params: { page: this.state.currentPage },
//     })
//     .then(response => {
//       this.setState({
//         currentPage: this.state.currentPage + 1,
//         photos: this.state.photos.concat(response.data),
//       })
//     })
//     .catch(error => {
//       console.log('Error happened during fetching!', error)
//     })
// }
