import styled from 'styled-components'
import { AccountCircle } from '../../icons'

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`

export const StyledAvatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.black};
  object-fit: contain;
`

export const DefaultAvatar = styled(AccountCircle)`
  height: 80%;
  width: 80%;
`
