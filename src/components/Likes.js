import React from 'react'
import { connect } from 'react-redux'
import { getPhoto, likePhoto, unlikePhoto } from '../actions'

class Likes extends React.Component {
  componentDidMount() {
    console.log('Likes componentDidMount', this.props)
    this.props.getPhoto(this.props.photoId)
  }

  onClickLikeIcon = () => {
    console.log(this.props.likedByUser)

    if (this.props.likedByUser) {
      console.log('UNLIKE')
      this.props.unlikePhoto(this.props.photoId)
    } else {
      console.log('LIKE')
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
