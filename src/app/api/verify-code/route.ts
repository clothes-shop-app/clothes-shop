import { NextResponse } from 'next/server'
import { verify } from '../../../lib/twilio-verify'

export async function POST(request: Request) {
  try {
    const { phoneNumber, code } = await request.json()

    if (!phoneNumber || !code) {
      return NextResponse.json(
        { message: 'Phone number and code are required' },
        { status: 400 }
      )
    }

    const verificationCheck = await verify.verificationChecks.create({
      to: phoneNumber,
      code: code
    })

    if (verificationCheck.status === 'approved') {
      const res = await fetch(
        `${process.env.BACKEND_URL}/users/phone/${phoneNumber}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      const data = await res.json()

      if (res.status === 404) {
        return NextResponse.json({
          success: true,
          message: 'User is not registered.',
          status: verificationCheck.status,
          data: null
        })
      }

      // Create response with user data
      const response = NextResponse.json({
        success: true,
        message: 'Phone number verified successfully',
        status: verificationCheck.status,
        data
      })

      // Set HTTP-only cookie with token if it exists
      if (data.token) {
        response.cookies.set('token', data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7
        })
      }

      return response
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid verification code',
          status: verificationCheck.status
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Verification check error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to verify code',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
