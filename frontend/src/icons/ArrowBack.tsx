import React from 'react'

export const ArrowBack = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      {...props}
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9766 23.9297L0 11.9648L11.9766 0L13.0312 1.05469L2.13281 11.9648L13.0312 22.875L11.9766 23.9297Z"
        fill="#999999"
      />
    </svg>
  )
}
