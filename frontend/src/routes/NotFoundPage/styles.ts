import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotFoundPageContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  margin-right: 20px;
`

export const NotFoundPageStatus = styled.h1`
  font-size: 48px;
  line-height: 56.25px;
`

export const NotFoundPageDescription = styled.p`
  font-size: 24px;
  line-height: 28.13px;
`
