import React from 'react'
import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos, loadPhotos } from '../actions'
import PhotoCard from './PhotoCard'

class PhotoList extends React.Component {
  componentDidMount() {
    if (this.props.photos.length === 0) {
      this.props.fetchPhotoList(this.props.currentPage)
    } else this.props.loadPhotos()
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage)

  renderList() {
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
            onClick={this.onClickLoadMore}
            type="button"
            className="ui button"
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
  { fetchPhotoList, fetchMorePhotos, loadPhotos }
)(PhotoList)
