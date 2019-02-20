import React from 'react'
import PhotoCard from './PhotoCard'
import { connect } from 'react-redux'
import { fetchPhotoList, fetchMorePhotos, clearPhotoList } from '../actions'

class PhotoList extends React.Component {
  componentDidMount() {
    const len = this.props.photos.length
    if (len) {
      this.props.fetchPhotoList(this.props.currentPage)
    } else {
      // refetch all photos with updated likes
      this.props.clearPhotoList()
      this.props.fetchPhotoList(1, len)
    }
  }

  onClickLoadMore = () => this.props.fetchMorePhotos(this.props.currentPage)

  renderList = () => {
    return this.props.photos.map(photo => {
      return <PhotoCard key={photo.id} photo={photo} />
    })
  }

  render() {
    console.log(this.props.photos)
    return (
      <div className="ui two column grid">
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
  { fetchPhotoList, fetchMorePhotos, clearPhotoList }
)(PhotoList)
