import React from 'react'

export const Arrow = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      {...props}
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.5 10L0.870834 0.25L12.1292 0.25L6.5 10Z" fill="#C4C4C4" />
    </svg>
  )
}
