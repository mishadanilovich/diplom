import styled from 'styled-components'

export const StyledLabel = styled.span`
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.labelColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  margin-right: auto;
  margin-bottom: 5px;
`

export const StyledSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
`

export const StyledInputContainer = styled.div`
  flex: 1;
  width: 100%;
`

export const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 5px 10px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
`

export const StyledArrow = styled.span<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%)
    rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
`

export const StyledItemsContainer = styled.div<{ bottom: number }>`
  align-items: center;
  width: calc(100% - 14px);
  background: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.modal};
  top: ${({ bottom }) => bottom + 1}px;
  left: 7px;
  padding: 5px;
  border-radius: 8px;
`

export const StyledItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 5px;
  border-radius: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-overflow: ellipsis;
`

export const StyledOutside = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.outSide};
`

export const Separator = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkGray};
`
