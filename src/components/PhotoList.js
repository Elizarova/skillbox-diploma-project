import './PhotoList.css'
import React from 'react'
import PhotoCard from './PhotoCard'

const PhotoList = ({ photos }) => {
  return (
    <div className="ui four column grid">
      {photos.map(photo => {
        return <PhotoCard key={photo.id} photo={photo} />
      })}
    </div>
  )
}

export default PhotoList
