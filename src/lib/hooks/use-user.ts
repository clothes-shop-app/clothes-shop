'use client'

export default function useUser() {
  const token = localStorage.getItem('token')

  return {
    token
  }
}
