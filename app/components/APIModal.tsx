import React from 'react'
import * as styles from './APIModal.css'

type Props = {
  isOpen: boolean
  onClose: () => void
  message: React.ReactNode
}

export default function APIModal({ isOpen, onClose, message }: Props) {
  return (
    isOpen && (
      <div className={styles.overlay}>
        <div className={styles.box}>
          <p>{message}</p>
          <button className={styles.closeButton} onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    )
  )
}
