import React from 'react'

class LikeIcon extends React.Component {
  constructor() {
    super()
    this.state = {
      liked: false,
    }
  }
  // console.log('LikeIcon', props)

  // handleClick = () => {
  //   this.setState({
  //     liked: !this.state.liked_by_user,
  //   })
  // }
  render() {
    const label = this.state.liked ? 'red' : 'black outline'
    return (
      <div>
        <i
          onClick={() => this.props.onClickLike(this.props.photoId)}
          className={`${label} large heart icon`}
        />
        {this.props.likes} likes
      </div>
    )
  }

  // <i onClick={this.handleClick} className={`${label} large heart icon`} />
}
// class LikeIcon extends React.Component {

//   constructor() {

//     super()
//     this.state = {
//       liked: this.props.liked_by_user,
//     }
//   }

export default LikeIcon
