import './PhotoList.css'
import React from 'react'
import { unsplash } from '../api/unsplash'
import PhotoCard from './PhotoCard'

import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos } from '../actions'

class PhotoList extends React.Component {
  componentDidMount() {
    unsplash.auth.setBearerToken(this.props.token)
    if (this.props.photos.length === 0) {
      this.props.fetchPhotoList(this.props.currentPage, 4)
    } else {
      this.props.fetchPhotoList(1, this.props.photos.length)
    }
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage, 4)

  render() {
    return (
      <div>
        <div className="photo-list">
          {this.props.photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>

        <div className="loadmore-button">
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
    token: state.auth.token,
  }
}

export default connect(
  mapStateToProps,
  { fetchPhotoList, fetchMorePhotos }
)(PhotoList)
