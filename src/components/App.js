import React from 'react'
import unsplash from '../api/unsplash'
import PhotoList from './PhotoList'

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
        <PhotoList photos={this.state.photos} />
        <button onClick={this.loadData} type="button" className="ui button">
          Load more
        </button>
      </div>
    )
  }
}

export default App
