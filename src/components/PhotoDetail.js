import React from 'react'

const PhotoDetail = ({ photo }) => {
  if (!photo) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img src={photo.urls.thumb} alt={photo.description} />
    </div>
  )
}
export default PhotoDetail
