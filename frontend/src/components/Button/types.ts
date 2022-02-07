import React from 'react'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
}
