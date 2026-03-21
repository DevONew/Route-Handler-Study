'use client'

import { useState } from 'react'
import APIButton from './components/APIButton'
import APIModal from './components/APIModal'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    const res = await fetch('/api/hello')
    const data = await res.json()
    setMessage(data.message)
    setIsOpen(true)
  }

  return (
    <main>
      <APIButton onClick={handleClick} disabled={false}>
        API 호출
      </APIButton>
      <APIModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </main>
  )
}
