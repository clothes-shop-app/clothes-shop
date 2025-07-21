import { NextRequest, NextResponse } from 'next/server'
import { generatePresignedUrl } from '@/lib/spaces'

export async function POST(request: NextRequest) {
  try {
    const { fileName, contentType } = await request.json()

    if (!fileName || !contentType) {
      return NextResponse.json(
        { error: 'fileName and contentType are required' },
        { status: 400 }
      )
    }

    // Generate presigned URL for direct upload
    const presignedUrl = await generatePresignedUrl(fileName, contentType)

    return NextResponse.json({ presignedUrl })
  } catch (error) {
    console.error('Error generating presigned URL:', error)
    return NextResponse.json(
      { error: 'Failed to generate upload URL' },
      { status: 500 }
    )
  }
}
