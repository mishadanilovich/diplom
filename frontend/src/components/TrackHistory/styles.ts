import styled from 'styled-components'

export const TrackHistoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const TrackHistoryContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px 0 10px 15px;
  overflow-x: clip;
  overflow-y: visible;
`

export const CrossContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 51px;
  height: 49px;
  border-left: ${(props) => props.theme.borders.main};
  margin-left: auto;
  box-shadow: ${(props) => props.theme.boxShadow.lightGray};
  z-index: 1;
`
