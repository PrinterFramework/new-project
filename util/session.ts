import { NextRequest, NextResponse } from 'next/server'
import { getIronSession, createResponse } from 'iron-session'

export const password =
  process.env.SESSION_SECRET ||
  'ad75fbbbddbf8005cb60e3089d6f156440f9c8ac1d13ad33a8e4758fdff73ff8'

export interface SessionI {
  counter?: number
}

export function getSession(req: NextRequest, res: NextResponse) {
  return getIronSession<SessionI>(req, res, {
    password,
    cookieName: 'printer',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.COOKIE_AGE
        ? Number(process.env.COOKIE_AGE)
        : undefined
    }
  })
}

export { createResponse }
