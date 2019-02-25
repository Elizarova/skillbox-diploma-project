import React from 'react'
import { unsplash } from '../api/unsplash'
import { toJson } from 'unsplash-js'

class Likes extends React.Component {
  state = { likedByUser: null, likes: null }

  componentDidMount() {
    this.setState({
      likedByUser: this.props.photo.liked_by_user,
      likes: this.props.photo.likes,
    })
  }

  onClickLikeIcon = photo => {
    if (!this.state.likedByUser) {
      unsplash.photos
        .likePhoto(photo.id)
        .then(toJson)
        .then(json => {
          unsplash.photos
            .getPhoto(json.photo.id)
            .then(toJson)
            .then(json => {
              this.setState({
                likedByUser: json.liked_by_user,
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
                likedByUser: json.liked_by_user,
                likes: json.likes,
              })
            })
        })
    }
  }

  render() {
    const label = this.state.likedByUser ? 'red inline' : 'black outline'
    return (
      <div>
        <i
          onClick={() => this.onClickLikeIcon(this.props.photo)}
          className={`${label} large heart icon`}
        />
        {this.state.likes} likes
      </div>
    )
  }
}

export default Likes
