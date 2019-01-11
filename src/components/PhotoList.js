import './PhotoList.css'
import React from 'react'

const PhotoList = props => {
  const photos = props.photos.map(photo => {
    return <img src={photo.urls.thumb} alt={photo.description} key={photo.id} />
  })

  return <div className="photo-list">{photos}</div>
}

export default PhotoList
