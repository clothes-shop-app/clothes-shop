import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// DigitalOcean Spaces configuration
const spacesEndpoint =
  process.env.DO_SPACES_ENDPOINT || 'https://nyc3.digitaloceanspaces.com'
const spacesKey = process.env.DO_SPACES_KEY
const spacesSecret = process.env.DO_SPACES_SECRET
const bucketName = process.env.DO_SPACES_BUCKET || 'your-bucket-name'

// Initialize S3 client for DigitalOcean Spaces
export const s3Client = new S3Client({
  endpoint: spacesEndpoint,
  region: 'fra1', // DigitalOcean Spaces uses us-east-1
  credentials: {
    accessKeyId: spacesKey!,
    secretAccessKey: spacesSecret!
  }
})

// Generate a presigned URL for direct upload
export async function generatePresignedUrl(
  fileName: string,
  contentType: string,
  expiresIn: number = 3600
) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: `uploads/${Date.now()}-${fileName}`,
    ContentType: contentType
  })

  return await getSignedUrl(s3Client, command, { expiresIn })
}

// Upload file directly to Spaces (for server-side uploads)
export async function uploadToSpaces(
  file: Buffer,
  fileName: string,
  contentType: string
) {
  const key = `uploads/${Date.now()}-${fileName}`

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: file,
    ContentType: contentType,
    ACL: 'public-read' // Make the file publicly accessible
  })

  await s3Client.send(command)
  return `${spacesEndpoint}/${bucketName}/${key}`
}
