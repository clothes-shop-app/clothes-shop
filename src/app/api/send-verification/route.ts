import { NextResponse } from 'next/server'
import { verify } from '../../../lib/twilio-verify'

export async function POST(request: Request) {
  const { phoneNumber, channel = 'sms' } = await request.json()

  if (!phoneNumber) {
    return NextResponse.json(
      { message: 'Phone number is required' },
      { status: 400 }
    )
  }

  try {
    const verification = await verify.verifications.create({
      to: phoneNumber,
      channel: channel
    })

    return NextResponse.json({
      success: true,
      message: 'Verification sent successfully',
      status: verification.status,
      sid: verification.sid
    })
  } catch (error) {
    console.error('Twilio Verify error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send verification',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
