import { NextRequest, NextResponse } from 'next/server'
import { getIronSession, createResponse } from 'iron-session'

export const password =
  process.env.SESSION_SECRET ||
  '5b66d6ca8e68642133c5d96807041cf4af4b04dff7926b5f145b77dad2f94c1d'

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
