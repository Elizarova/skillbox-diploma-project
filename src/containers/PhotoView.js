import dateConverter from '../utils/dateConverter'
import React from 'react'
import Photo from '../components/Photo'
import LikeIcon from '../components/LikeIcon'
import './PhotoView.css'

const PhotoView = ({ match, history, photos, onClickLike, onClickBack }) => {
  let photo = photos.filter(photo => photo.id === match.params.id)[0]

  if (!photo) return null

  const back = e => {
    e.stopPropagation()
    history.goBack()
    onClickBack()
  }

  const { user, updated_at } = photo

  return (
    <div className="photo-view">
      <div className="content">
        <div className="photo">
          <Photo src={photo.urls.regular} descripton={photo.descripton} />
        </div>
        <div className="photo-detail">
          <div>
            <span style={{ float: 'right' }}>
              <LikeIcon photo={photo} onClickLike={onClickLike} />
            </span>
            <p>
              Photo by&nbsp;
              <a href={user.links.html}>{user.name}</a> on
              <a href="https://unsplash.com/">&nbsp;Unsplash</a>
            </p>
          </div>
          <div>
            <span>{dateConverter(updated_at)}</span>
          </div>
        </div>
      </div>

      <div className="photo-close">
        <button className="ui button" type="button" onClick={back}>
          Back
        </button>
      </div>
    </div>
  )
}
export default PhotoView
