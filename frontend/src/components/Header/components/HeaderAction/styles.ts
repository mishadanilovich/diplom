import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`

export const UserInfo = styled.p`
  display: flex;
  column-gap: 5px;
  padding: 5px 15px;
  border: ${(props) => props.theme.borders.main};
  border-radius: 5px;
`

export const Separator = styled.span`
  color: ${(props) => props.theme.colors.lightBlack};
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  .logout-icon {
    transition: stroke 0.2s;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.colors.blue};

    .logout-icon {
      stroke: ${(props) => props.theme.colors.blue};
    }
  }
`

export const ScreenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  .screen-icon {
    transition: stroke 0.2s;
  }

  &:hover,
  &:focus {
    cursor: pointer;

    .screen-icon {
      stroke: ${(props) => props.theme.colors.blue};
    }
  }

  &:focus {
    border: ${(props) => props.theme.borders.lightBlue};
    border-radius: 7px;
  }
`
