'use client'

import { ChevronLeft, ChevronRight, Upload, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

interface UploadedFile {
  name: string
  url: string
  size: number
}

export default function ImageUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)

  async function uploadFile(file: File): Promise<string> {
    const response = await fetch('/api/get-presigned-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fileName: file.name,
        contentType: file.type
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get upload URL')
    }

    const { presignedUrl } = await response.json()

    const uploadResponse = await fetch(presignedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
        'x-amz-acl': 'public-read'
      }
    })

    if (!uploadResponse.ok) {
      throw new Error('Failed to upload file')
    }

    const url = presignedUrl.split('?')[0]
    return url
  }

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files

    if (!files) return

    setIsUploading(true)

    try {
      const uploadPromises = Array.from(files).map(async file => {
        const url = await uploadFile(file)
        return {
          name: file.name,
          url,
          size: file.size
        }
      })

      const uploadedFiles = await Promise.all(uploadPromises)
      setUploadedFiles(prev => [...prev, ...uploadedFiles])

      toast.success('Files uploaded successfully!', {
        description: `${uploadedFiles.length} file(s) have been uploaded.`
      })
    } catch (error) {
      console.error('Upload failed:', error)
      toast.error('Upload failed', {
        description: 'Please try again or check your connection.'
      })
    } finally {
      setIsUploading(false)
    }
  }

  function removeFile(index: number) {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === uploadedFiles.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? uploadedFiles.length - 1 : prev - 1
    )
  }

  return (
    <div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Images</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">
              {isUploading ? 'Uploading...' : 'Click to upload images'}
            </span>
          </label>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Uploaded files:</h4>
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded"
              >
                <span className="text-sm truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <input
        type="hidden"
        name="images"
        value={uploadedFiles.map(file => file.url).join(',')}
      />

      <div className="relative">
        <div className="flex overflow-hidden rounded-lg">
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 transition-transform duration-300 ${
                index === currentImageIndex
                  ? 'translate-x-0'
                  : 'translate-x-full'
              }`}
            >
              <Image
                width={1000}
                height={1000}
                src={file.url}
                alt={`Uploaded file ${index + 1}`}
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </div>

        {uploadedFiles.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {uploadedFiles.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex
                      ? 'bg-white'
                      : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
