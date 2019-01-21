import React from 'react'
import PhotoList from '../components/PhotoList'

const Auth = ({ photos, onClickLodeMore }) => {
  return (
    <div>
      <PhotoList photos={photos} />
      <button onClick={onClickLodeMore} type="button" className="ui button">
        Load more
      </button>
    </div>
  )
}

export default Auth
