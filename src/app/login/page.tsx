'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { useState } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState('')

  const handleSendOTP = async () => {
    setIsLoading(true)
    setIsCodeSent(true)
    const response = await fetch('/api/send-verification', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber })
    })
    const data = await response.json()
    console.log(data)
    setIsLoading(false)
  }

  const handleVerifyOTP = async () => {
    setIsLoading(true)
    const response = await fetch('/api/verify-code', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber, code })
    })
    const data = await response.json()
    setIsLoading(false)

    if (data.success && data.status === 'approved') {
      toast.success('OTP verified successfully')

      const response = await fetch(
        `${process.env.BACKEND_URL}/users/${phoneNumber}`
      )
      const data = await response.json()
      console.log(data)

      if (data.user) {
        toast.success('User found')
      } else {
        toast.error('User not found')
      }
    } else {
      toast.error('Invalid OTP')
    }
  }

  return (
    <div className="container p-8 flex justify-center">
      <div className="w-[500px] p-8 flex flex-col gap-4">
        <p className="text-sm text-gray-600">
          We use phone number authentication, if this your first you will be
          automatically redirected to register page.
        </p>
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="phoneNumber"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <Button
            type="submit"
            variant="outline"
            onClick={handleSendOTP}
            disabled={isLoading}
          >
            Send OTP
          </Button>
        </div>
        {isCodeSent && (
          <div className="flex w-full max-w-sm items-center gap-2">
            <InputOTP maxLength={6} value={code} onChange={e => setCode(e)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button
              type="submit"
              variant="outline"
              onClick={handleVerifyOTP}
              disabled={isLoading}
            >
              Verify OTP
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
