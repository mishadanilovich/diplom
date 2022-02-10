import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Arrow } from '../../icons/Arrow'
import { Items, Props } from './types'
import {
  StyledArrow,
  StyledInput,
  StyledItem,
  StyledItemsContainer,
  StyledLabel,
  StyledOutside,
  StyledSelect,
} from './styles'

const Select = ({ onChange, items, label }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState<Items>(items[0])
  const [bottom, setBottom] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onChange(value)
  }, [value])

  useEffect(() => {
    if (ref.current) {
      setBottom(ref.current?.getBoundingClientRect().height)
    }
  }, [])

  const handleClick = useCallback((value) => {
    onChange(value)
    setValue(value)
    setIsOpen(false)
  }, [])

  const outsideDiv = <StyledOutside onClick={() => setIsOpen(false)} />

  return (
    <>
      {isOpen && outsideDiv}
      <StyledSelect ref={ref}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput onClick={() => setIsOpen(true)}>
          {value?.display}
          <StyledArrow isOpen={isOpen}>
            <Arrow />
          </StyledArrow>
        </StyledInput>
        {isOpen && (
          <StyledItemsContainer bottom={bottom}>
            {items.map(({ display, value }) => (
              <StyledItem
                key={value}
                onClick={() => handleClick({ display, value })}
              >
                {display}
              </StyledItem>
            ))}
          </StyledItemsContainer>
        )}
      </StyledSelect>
    </>
  )
}

export default memo(Select)
