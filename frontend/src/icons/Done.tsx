import React from 'react'

export const Done = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      {...props}
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 1.74138L7.53629 16.5L0 8.80345L1.21771 7.56207L7.53629 13.9897L20.7823 0.5L22 1.74138Z"
        fill="#474747"
      />
    </svg>
  )
}
