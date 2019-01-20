import unsplash from '../api/unsplash'

const Home = () => {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    'public',
    'write_likes',
  ])

  console.log(authenticationUrl)
  window.location.assign(authenticationUrl)
  return null
}

export default Home
