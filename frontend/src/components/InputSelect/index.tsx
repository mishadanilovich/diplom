import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Items, Props } from './types'
import {
  Separator,
  StyledArrow,
  StyledInputContainer,
  StyledItem,
  StyledItemsContainer,
  StyledLabel,
  StyledOutside,
  StyledSelect,
} from './styles'
import { Arrow } from '../../icons/Arrow'
import { StyledInput } from '../StyledInput'

export const InputSelect = ({
  onChange,
  items,
  label,
  defaultPlaceholder,
  value,
  formikProps,
  name,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [options, setOptions] = useState<Items[] | null>(items)
  const [inputValue, setInputValue] = useState('')
  const [bottom, setBottom] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const { errors, touched } = formikProps

  useEffect(() => {
    setOptions(items)
    if (!items?.length && defaultPlaceholder) setInputValue(defaultPlaceholder)
    else if (value) setInputValue(value)
    else setInputValue('')
  }, [items])

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
    if (value) onChange({ display: '', value: '' })
    if (!isOpen && options?.length) setIsOpen(true)
    setInputValue(e.target.value)
    if (items)
      setOptions(items?.filter((el) => el.display.includes(e.target.value)))
  }

  const outsideDiv = <StyledOutside onClick={() => setIsOpen(false)} />

  return (
    <>
      {isOpen && outsideDiv}
      <StyledSelect ref={ref}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInputContainer>
          <StyledInput
            id={name}
            name={name}
            value={inputValue}
            onChange={(e) => handleInputFilter(e)}
            onClick={() => options?.length && setIsOpen(true)}
            disabled={!items?.length}
            errorText={errors[name]}
            isError={!!errors[name] && !!touched[name]}
            autoComplete="off"
          >
            <StyledArrow isOpen={isOpen}>
              <Arrow />
            </StyledArrow>
          </StyledInput>
        </StyledInputContainer>
        {isOpen && !!options?.length && (
          <StyledItemsContainer bottom={bottom}>
            {options.map(({ display, value }, index) => (
              <React.Fragment key={value}>
                <StyledItem onClick={() => handleClick({ display, value })}>
                  {display}
                </StyledItem>
                {index !== options?.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </StyledItemsContainer>
        )}
      </StyledSelect>
    </>
  )
}
