import styled from 'styled-components'

export const RoadmapContainer = styled.div`
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: 1fr 1fr;
  padding: 22px;

  & .roadmap-item:nth-child(even) {
    justify-self: end;
  }

  & .roadmap-item:nth-child(odd) {
    justify-self: start;
  }
`

export const RoadmapItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.purple};
`
