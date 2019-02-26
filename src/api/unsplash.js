import Unsplash from 'unsplash-js'

export const unsplash = new Unsplash({
  applicationId:
    '6cd84a3d39af26340b81c3e1ed7158e197f6376882bc019f62073d738f10d52c',
  secret: '9498ce802640ef4d0962391bffc6911793bb54a32bed9b0a253f24b8fbdaacb0',
  callbackUrl: 'https://skillbox-diploma-project.herokuapp.com/auth',
  // callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
})

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
])
