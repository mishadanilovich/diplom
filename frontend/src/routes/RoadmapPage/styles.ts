import styled from 'styled-components'

export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 49px 0;

  & .roadmap-item:nth-child(even) {
    justify-self: end;
  }

  & .roadmap-item:nth-child(odd) {
    justify-self: start;
  }
`

export const RoadmapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.purple};
`

export const Road = styled.span`
  min-height: 60px;
  width: 20px;
  background: ${({ theme }) => theme.colors.road};
`
