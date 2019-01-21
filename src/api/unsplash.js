// import axios from 'axios'

// export default axios.create({
//   baseURL: 'https://api.unsplash.com',
//   headers: {
//     Authorization:
//       'Client-ID 6cd84a3d39af26340b81c3e1ed7158e197f6376882bc019f62073d738f10d52c',
//   },
// })

import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId:
    '6cd84a3d39af26340b81c3e1ed7158e197f6376882bc019f62073d738f10d52c',
  secret: '9498ce802640ef4d0962391bffc6911793bb54a32bed9b0a253f24b8fbdaacb0',
  callbackUrl: 'https://skillbox-diploma-project.herokuapp.com/auth',
})

export default unsplash
