import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export function getUserClaims(token: string) {
  return jwt.decode(token) as jwt.JwtPayload
}

export async function getUserClaimsFromCookie() {
  const cookieStore = await cookies()
  const tokenStr = cookieStore.get('token')
  return getUserClaims(tokenStr?.value || '')
}

export async function isUserAuthenticated() {
  const claims = await getUserClaimsFromCookie()
  return claims && claims.exp && claims.exp > Date.now() / 1000
}
