import React from 'react'

class LikeIcon extends React.Component {
  constructor() {
    super()
    this.state = {
      liked_by_user: true,
    }
  }

  handleClick = () => {
    this.setState({
      liked_by_user: !this.state.liked_by_user,
    })
  }
  render() {
    const label = this.state.liked_by_user ? 'red' : 'black outline'
    return (
      <i onClick={this.handleClick} className={`${label} large heart icon`} />
    )
  }
}

export default LikeIcon
