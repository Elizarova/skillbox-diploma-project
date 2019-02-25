import './PhotoList.css'
import React from 'react'
import PhotoCard from './PhotoCard'
import { unsplash } from '../api/unsplash'
import { toJson } from 'unsplash-js'
import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos } from '../actions'

const code = window.location.search.split('code=')[1]
// const code = '80b34d2531282e8a556d9ee6c0a6190b9fe4710f7670cf4c6fd5955266a157b5'

class PhotoList extends React.Component {
  componentDidMount() {
    unsplash.auth
      .userAuthentication(code)
      .then(toJson)
      .then(json => {
        if (json.error) {
          console.log(json.error)
        } else {
          unsplash.auth.setBearerToken(json.access_token)

          this.props.photos.length === 0
            ? this.props.fetchPhotoList(this.props.currentPage, 4)
            : this.props.fetchPhotoList(1, this.props.photos.length)
        }
      })
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage, 4)

  render() {
    return (
      <div className="container ">
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
  }
}

export default connect(
  mapStateToProps,
  { fetchPhotoList, fetchMorePhotos }
)(PhotoList)
