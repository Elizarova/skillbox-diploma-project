import React from 'react'
import PhotoCard from './PhotoCard'
import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos } from '../actions'
import { unsplashAuth } from '../api/unsplash'

// const code = '72df8447da757a82808628ac724f3287de7c203bb626480b0c3ea80b45968f31'
const code = window.location.search.split('code=')[1]

class PhotoList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount photoList', this.props.photos)
    this.props.photos.length === 0
      ? unsplashAuth(code).then(
          this.props.fetchPhotoList(this.props.currentPage, 4)
        )
      : this.props.fetchPhotoList(1, this.props.photos.length)
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage, 4)

  renderList = () => {
    return this.props.photos.map(photo => {
      return <PhotoCard key={photo.id} photo={photo} />
    })
  }

  render() {
    console.log('render', this.props.photos)
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
