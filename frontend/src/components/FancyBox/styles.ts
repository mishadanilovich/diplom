import styled from 'styled-components'

export const FancyBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const ThumbnailImage = styled.img`
  width: 620px;
  height: 300px;
  transform: rotate(90deg);
  border: 1px solid ${({ theme }) => theme.colors.black};
`
