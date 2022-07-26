export const password = '2084fb109ba9025e899a7bedb4f39be8bfb8ac4b9048c53d5264379ba6a63038';

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
