import React from 'react'
import PhotoCard from './PhotoCard'
import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos } from '../actions'

class PhotoList extends React.Component {
  componentDidMount() {
    if (this.props.photos === 0) {
      this.props.fetchPhotoList(this.props.currentPage, 2)
    }
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage, 2)

  renderList = () => {
    return this.props.photos.map(photo => {
      return <PhotoCard key={photo.id} photo={photo} />
    })
  }

  render() {
    console.log(this.props.photos)
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
