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
            <img ref={this.imageRef} alt={description} src={urls.small} />
          </div>
          <div className="content">
            Photo by&nbsp;
            <a href={user.links.html}>{user.name}</a> on
            <a href="https://unsplash.com/">&nbsp;Unsplash</a>
          </div>
          <div className="extra content">
            <span className="right floated">
              <i className="heart outline icon" />
              {likes} likes
            </span>
            <span>{dateConverter(updated_at)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoCard
