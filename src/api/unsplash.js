import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6cd84a3d39af26340b81c3e1ed7158e197f6376882bc019f62073d738f10d52c',
  },
})
