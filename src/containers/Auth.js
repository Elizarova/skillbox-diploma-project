import React from 'react'
import PhotoList from '../components/PhotoList'
import { unsplashAuth } from '../api/unsplash'

const Auth = () => {
  const code = window.location.search.split('code=')[1]
  // const code =
  //  '94cee02e5b2c55ceece6431cb67ceaa1937d2907bb6600e0ca3fab287a96e60a'

  unsplashAuth(code)

  return (
    <div>
      <PhotoList />
    </div>
  )
}

export default Auth
