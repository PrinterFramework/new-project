export const password = '688e0189aa0927909e6ad29fe41835982fbb2a896cb4600e4bc795a3c8a68258';

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
