import { authenticationUrl } from '../api/unsplash'

const Home = () => {
  window.location.assign(authenticationUrl)
  return null
}

export default Home
