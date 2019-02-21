import React from 'react'
import { connect } from 'react-redux'
import { getPhoto, likePhoto, unlikePhoto } from '../actions'

class Likes extends React.Component {
  componentDidMount() {
    this.props.getPhoto(this.props.photoId)
  }

  onClickLikeIcon = () => {
    if (this.props.likedByUser) {
      this.props.unlikePhoto(this.props.photoId)
    } else {
      this.props.likePhoto(this.props.photoId)
    }
  }

  render() {
    const label = this.props.likedByUser ? 'red inline' : 'black outline'

    return (
      <div>
        <i
          onClick={() => this.onClickLikeIcon()}
          className={`${label} large heart icon`}
        />
        {this.props.likes} likes
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    photoId: ownProps.photoId,
    likedByUser: state.photo.likedByUser,
    likes: state.photo.likes,
  }
}

export default connect(
  mapStateToProps,
  { getPhoto, likePhoto, unlikePhoto }
)(Likes)
