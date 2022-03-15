import styled from 'styled-components'
import { Button } from '../Button'

export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 49px 22px;
  height: 100%;

  position: relative;
`

export const StyledTitle = styled.h2`
  margin-top: 0;
`

export const RoadmapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

export const Item = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.purple};
  transition: opacity 0.2s;
  padding: 10px;
  text-align: center;
  opacity: ${({ show }) => (show ? '100%' : '50%')};
`

export const Road = styled.span`
  min-height: 60px;
  width: 20px;
  background: ${({ theme }) => theme.colors.road};
`

export const NotFoundText = styled.p`
  font-size: 24px;
`

export const ControlButton = styled.span`
  margin-left: 5px;

  & > svg {
    fill: ${({ theme }) => theme.colors.black};
  }
`

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`
