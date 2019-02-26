import dateConverter from '../utils/dateConverter'
import React from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom'

const PhotoCard = ({ photo }) => {
  const { likes, user, updated_at, id, urls, description } = photo

  return (
    <div className="photo-item">
      <div className="ui card">
        <div className="image">
          <Link to={{ pathname: `/photo/${id}` }}>
            <Photo src={urls.thumb} description={description} />
          </Link>
        </div>
        <div className="content">
          <p>
            Photo by&nbsp;
            <a href={user.links.html}>{user.name}</a> on
            <a href="https://unsplash.com/">&nbsp;Unsplash</a>
          </p>
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

export default PhotoCard
