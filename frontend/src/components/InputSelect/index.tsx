import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Props } from './types'
import {
  Separator,
  StyledArrow,
  StyledInput,
  StyledInputContainer,
  StyledItem,
  StyledItemsContainer,
  StyledLabel,
  StyledOutside,
  StyledSelect,
} from './styles'
import { Arrow } from '../../icons/Arrow'

export const InputSelect = ({ onChange, items, label }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = useState<string>(
    items ? 'Нет преподавателей' : ''
  )
  const [bottom, setBottom] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setBottom(ref.current?.getBoundingClientRect().height)
    }
  }, [])

  const handleClick = useCallback((data) => {
    onChange(data)
    setInputValue(data.value)
    setIsOpen(false)
  }, [])

  const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOpen) setIsOpen(true)
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const outsideDiv = <StyledOutside onClick={() => setIsOpen(false)} />

  console.log(isOpen, items)
  return (
    <>
      {isOpen && outsideDiv}
      <StyledSelect ref={ref}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInputContainer>
          <StyledInput
            onClick={() => setIsOpen(true)}
            onChange={(e) => handleInputFilter(e)}
            value={inputValue}
          />
          <StyledArrow isOpen={isOpen}>
            <Arrow />
          </StyledArrow>
        </StyledInputContainer>
        {isOpen && items && (
          <StyledItemsContainer bottom={bottom}>
            {items.map(({ display, value }, index) => (
              <React.Fragment key={value}>
                <StyledItem onClick={() => handleClick({ display, value })}>
                  {display}
                </StyledItem>
                {index !== items?.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </StyledItemsContainer>
        )}
      </StyledSelect>
    </>
  )
}
