import React from 'react'

export const MoreVert = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      {...props}
      width="4"
      height="18"
      viewBox="0 0 4 18"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fillOpacity="0.2" />
      <circle cx="2" cy="9" r="2" fillOpacity="0.2" />
      <circle cx="2" cy="16" r="2" fillOpacity="0.2" />
    </svg>
  )
}
