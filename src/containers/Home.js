import { authenticationUrl } from '../api/unsplash'

const Home = () => {
  // console.log(authenticationUrl)
  window.location.assign(authenticationUrl)
  return null
}

export default Home
