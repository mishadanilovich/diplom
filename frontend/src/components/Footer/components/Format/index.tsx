import React from 'react'
import { FormatIcon } from '../../../../icons'

import { FormatContainer } from './styles'
import { FORMAT_CONSOLE } from '../../../../constants'

export const Format = (): JSX.Element => {
  return (
    <FormatContainer>
      <FormatIcon className="format-icon" />
      {FORMAT_CONSOLE}
    </FormatContainer>
  )
}
