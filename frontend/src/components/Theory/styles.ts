import styled from 'styled-components'
import { Button } from '../Button'

export const TheoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 22px 22px;

  .swiper-pagination {
    bottom: -3px;
  }
`

export const SwiperItem = styled.div`
  height: 220px;
  padding-bottom: 7px;
  object-fit: fill;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const StyledButton = styled(Button)`
  margin: 20px auto 0;
  max-width: 190px;
`
