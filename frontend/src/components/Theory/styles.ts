import styled from 'styled-components'
import { Button } from '../Button'

export const TheoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 22px 22px;

  .swiper-pagination {
    bottom: -3px;
  }

  u {
    font-style: italic;
  }

  p,
  h3 {
    text-indent: 25px;
  }

  p {
    text-align: justify;
  }
`

export const StyledButton = styled(Button)`
  margin: 20px auto 0;
  max-width: 190px;
`
