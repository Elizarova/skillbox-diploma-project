import './PhotoList.css'
import React from 'react'
import PhotoCard from './PhotoCard'

const PhotoList = ({ photos, onPhotoSelect }) => {
  const renderedList = photos.map(photo => {
    return (
      <PhotoCard key={photo.id} photo={photo} onPhotoSelect={onPhotoSelect} />
    )
  })

  return <div className="photo-list">{renderedList}</div>
}

export default PhotoList
