import React from 'react'

export interface ErrorProps {
  isError?: boolean
}

export interface Props
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ErrorProps {
  isOptional?: boolean
  textLabel?: string
}
