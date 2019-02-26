import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Photo from '../components/Photo'
import Likes from '../components/Likes'
import dateConverter from '../utils/dateConverter'
import { unsplash } from '../api/unsplash'
import './PhotoView.css'

const PhotoView = ({ match, history, photos, token }) => {
  const photo = photos.filter(photo => photo.id === match.params.id)[0]

  if (!photo || token === undefined) {
    return (
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    )
  }

  unsplash.auth.setBearerToken(token)

  const back = e => {
    e.stopPropagation()
    history.goBack()
  }

  const { updated_at, user, urls, descripton } = photo

  return (
    <div className="photo-view">
      <div className="content">
        <div className="photo">
          <Photo src={urls.regular} descripton={descripton} />
        </div>
        <div className="photo-detail">
          <div>
            <span style={{ float: 'right' }}>
              <Likes photo={photo} />
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

const mapStateToProps = state => {
  return {
    photos: state.photoList.photos,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps)(PhotoView)
