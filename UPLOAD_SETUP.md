# DigitalOcean Spaces Upload Setup

This project now supports secure image uploads to DigitalOcean Spaces directly from the frontend.

## Setup Instructions

### 1. Create a DigitalOcean Spaces Bucket

1. Go to your DigitalOcean account
2. Navigate to Spaces in the left sidebar
3. Create a new Space (bucket)
4. Note down your Space name and region

### 2. Generate API Keys

1. In your DigitalOcean account, go to API → Spaces Keys
2. Generate a new Spaces key
3. Save both the Access Key and Secret Key

### 3. Environment Variables

Create a `.env.local` file in your project root with:

```env
# DigitalOcean Spaces Configuration
DO_SPACES_ENDPOINT=https://nyc3.digitaloceanspaces.com
DO_SPACES_KEY=your_spaces_access_key
DO_SPACES_SECRET=your_spaces_secret_key
DO_SPACES_BUCKET=your_bucket_name
```

**Note:** Replace `nyc3` in the endpoint with your actual region (e.g., `sfo2`, `ams3`, etc.)

### 4. Bucket Permissions

Make sure your Space is configured to allow public read access for uploaded images.

## How It Works

1. **Secure Upload**: The frontend requests a presigned URL from your Next.js API
2. **Direct Upload**: Files are uploaded directly to DigitalOcean Spaces using the presigned URL
3. **No Credentials Exposure**: Your Spaces credentials stay secure on the server
4. **Public URLs**: Uploaded images get public URLs that can be used in your application

## Features

- ✅ Secure uploads (no credentials in frontend)
- ✅ Multiple file upload support
- ✅ Progress indication
- ✅ File removal before submission
- ✅ Automatic file naming with timestamps
- ✅ Public URL generation

## Security Benefits

- **No credential exposure**: Your DigitalOcean Spaces keys are never sent to the frontend
- **Time-limited URLs**: Presigned URLs expire after 1 hour
- **Server-side validation**: Upload requests are validated on the server
- **Direct upload**: Files go directly to Spaces, not through your server

## Usage

1. Navigate to `/clothes/upload`
2. Fill in product details
3. Click the upload area to select images
4. Images will be uploaded to DigitalOcean Spaces
5. Submit the form to save product data with image URLs
