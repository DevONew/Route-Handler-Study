import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'inline-block',
})

export const button = style({
  padding: '8px 16px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',

  selectors: {
    '&:hover': {
      backgroundColor: '#005cc5',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
})
