import React from 'react'
import unsplash from '../api/unsplash'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends React.Component {
  state = { photos: [], currentPage: 1, selectedPhoto: null }

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

  onPhotoSelect = photo => {
    this.setState({ selectedPhoto: photo })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <PhotoDetail photo={this.state.selectedPhoto} />
        <PhotoList
          photos={this.state.photos}
          onPhotoSelect={this.onPhotoSelect}
        />
        <button onClick={this.loadData} type="button" className="ui button">
          Load more
        </button>
      </div>
    )
  }
}

export default App
