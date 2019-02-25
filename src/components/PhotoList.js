import React from 'react'
import PhotoCard from './PhotoCard'
import { unsplashAuth } from '../api/unsplash'
import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos } from '../actions'

class PhotoList extends React.Component {
  componentDidMount() {
    const code = window.location.search.split('code=')[1]
    // const code =
    //  '94cee02e5b2c55ceece6431cb67ceaa1937d2907bb6600e0ca3fab287a96e60a'

    unsplashAuth(code)

    console.log('componentDidMount photoList', this.props.photos)
    this.props.photos.length === 0
      ? this.props.fetchPhotoList(this.props.currentPage, 4)
      : this.props.fetchPhotoList(1, this.props.photos.length)
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage, 4)

  renderList = () => {
    return this.props.photos.map(photo => {
      return <PhotoCard key={photo.id} photo={photo} />
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        {this.renderList()}
        <div style={{ textAlign: 'center', width: '100%' }}>
          <button
            type="button"
            className="ui button"
            onClick={this.onClickLoadMore}
          >
            Load more
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photoList.photos,
    currentPage: state.photoList.currentPage,
  }
}

export default connect(
  mapStateToProps,
  { fetchPhotoList, fetchMorePhotos }
)(PhotoList)
