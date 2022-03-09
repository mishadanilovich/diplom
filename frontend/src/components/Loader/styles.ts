import styled from 'styled-components'

export const Container = styled.div`
  animation: 2s linear 0s infinite alternate loading;

  @keyframes loading {
    0% {
      margin-bottom: 0;
    }
    25% {
      margin-bottom: 5%;
    }
    50% {
      margin-bottom: -2%;
    }
  }
`
