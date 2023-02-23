export const password =
  '5b66d6ca8e68642133c5d96807041cf4af4b04dff7926b5f145b77dad2f94c1d'

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}
