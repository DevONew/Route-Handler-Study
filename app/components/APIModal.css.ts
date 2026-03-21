import { style } from '@vanilla-extract/css'

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const box = style({
  backgroundColor: '#fff',
  color: '#171717',
  borderRadius: '8px',
  padding: '24px',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const closeButton = style({
  alignSelf: 'flex-end',
  padding: '6px 12px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: '#005cc5',
    },
  },
})
