import React from 'react'

export const Cross = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      stroke="#0D0D0D"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L19 19" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 1L1 19" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
