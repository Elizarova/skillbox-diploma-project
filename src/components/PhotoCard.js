import dateConverter from '../utils/dateConverter'
import React from 'react'

class PhotoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    // console.log(this.imageRef);
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    // 105px is a height of details in card div
    // TO DO get height of photo-card
    const height = this.imageRef.current.clientHeight + 105
    const spans = Math.ceil(height / 10)
    this.setState({ spans })
  }

  render() {
    const { photo, onPhotoSelect } = this.props
    const { description, urls, likes, user, updated_at } = this.props.photo

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div className="ui card">
          <div className="image" onClick={() => onPhotoSelect(photo)}>
            <img ref={this.imageRef} alt={description} src={urls.thumb} />
          </div>
          <div className="content">
            <img
              className="ui avatar image"
              alt={user.name}
              src={user.profile_image.small}
            />
            <a href={user.portfolio_url}>{user.name}</a>
          </div>
          <div className="extra content">
            <span className="right floated">
              <i className="heart outline like icon" />
              {likes} likes
            </span>
            <span>
              <i className="calendar alternate outline icon" />
              {dateConverter(updated_at)}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoCard
