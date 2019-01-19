import React from 'react'
import PhotoList from '../components/PhotoList'

const Auth = ({ photos, loadData }) => {
  return (
    <div>
      <PhotoList photos={photos} />
      <button onClick={loadData} type="button" className="ui button">
        Load more
      </button>
    </div>
  )
}

export default Auth
