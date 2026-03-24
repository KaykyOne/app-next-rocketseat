"use client"
import React from 'react'

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-red-500 p-5'>{children}</div>
  )
}
