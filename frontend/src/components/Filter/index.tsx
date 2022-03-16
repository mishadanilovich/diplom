import React from 'react'
import { FilterContainer, StyledCross, StyledInput } from './styles'
import { Props } from './types'

export const Filter = ({ data, onChange }: Props) => {
  return (
    <FilterContainer className="flex-center-horizontal">
      <StyledInput value={data} onChange={(e) => onChange(e.target.value)} />
      {!!data && <StyledCross onClick={() => onChange('')} />}
    </FilterContainer>
  )
}
