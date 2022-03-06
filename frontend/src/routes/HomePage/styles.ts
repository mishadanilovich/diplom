import styled from 'styled-components'

export const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  padding: 22px;
  column-gap: 20px;
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
  padding: 10px;
  text-align: center;
  transition: all 0.2s;

  &:active {
    transform: scale(105%);
  }
`
