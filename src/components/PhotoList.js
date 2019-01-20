import './PhotoList.css'
import React from 'react'
import PhotoCard from './PhotoCard'

const PhotoList = props => {
  return (
    <div className="ui four column grid">
      {props.photos.map(photo => {
        return <PhotoCard key={photo.id} photo={photo} />
      })}
    </div>
  )
}

export default PhotoList
