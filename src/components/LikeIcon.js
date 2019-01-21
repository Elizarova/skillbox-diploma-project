import React from 'react'
import unsplash from '../api/unsplash'
import { toJson } from 'unsplash-js'

class LikeIcon extends React.Component {
  constructor() {
    super()
    this.state = { liked: null, likes: null }
  }

  componentDidMount() {
    console.log(this.state)
    this.setState({
      liked: this.props.photo.liked_by_user,
      likes: this.props.photo.likes,
    })
  }

  onClickLike = photo => {
    if (!this.state.liked) {
      unsplash.photos
        .likePhoto(photo.id)
        .then(toJson)
        .then(json => {
          unsplash.photos
            .getPhoto(json.photo.id)
            .then(toJson)
            .then(json => {
              this.setState({
                liked: json.liked_by_user,
                likes: json.likes,
              })
            })
        })
    } else {
      unsplash.photos
        .unlikePhoto(photo.id)
        .then(toJson)
        .then(json => {
          unsplash.photos
            .getPhoto(json.photo.id)
            .then(toJson)
            .then(json => {
              this.setState({
                liked: json.liked_by_user,
                likes: json.likes,
              })
            })
        })
    }
  }

  render() {
    const label = this.state.liked ? 'red inline' : 'black outline'
    console.log(this.state)
    return (
      <div>
        <i
          onClick={() => this.onClickLike(this.props.photo)}
          className={`${label} large heart icon`}
        />
        {this.state.likes} likes
      </div>
    )
  }
}

export default LikeIcon
