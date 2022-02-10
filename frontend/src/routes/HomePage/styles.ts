import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  padding: 22px;
`

export const SectionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 152px;
  height: 138px;
  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 20px;
`
