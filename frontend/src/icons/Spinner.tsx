import React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  animation: spinner 2s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export const Spinner = (): JSX.Element => {
  return (
    <>
      <StyledSvg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M12 2V6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.7"
          d="M12 18V22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.92993 4.93005L7.75993 7.76005"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.6"
          d="M16.24 16.24L19.07 19.07"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.9"
          d="M2 12H6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M18 12H22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.8"
          d="M4.92993 19.07L7.75993 16.24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.3"
          d="M16.24 7.76005L19.07 4.93005"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSvg>
    </>
  )
}
