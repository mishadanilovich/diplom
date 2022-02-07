import React, { useState } from 'react'
import { HistoryItem } from '../../components'
import { Cross } from '../../icons'

import {
  CrossContainer,
  TrackHistoryContainer,
  TrackHistoryContent,
} from './styles'

export const TrackHistory = (): JSX.Element => {
  const [queriesList] = useState([
    1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  ])

  return (
    <TrackHistoryContainer>
      <TrackHistoryContent>
        {queriesList.map((el, i) => {
          return <HistoryItem key={i} isError={!!el} />
        })}
      </TrackHistoryContent>
      <CrossContainer>
        <Cross />
      </CrossContainer>
    </TrackHistoryContainer>
  )
}
