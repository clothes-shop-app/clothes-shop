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
      return NextResponse.json({
        success: true,
        message: 'Phone number verified successfully',
        status: verificationCheck.status
      })
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
