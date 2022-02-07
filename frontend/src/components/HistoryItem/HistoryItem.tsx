import React, { useRef, useState } from 'react'
import { MoreVert } from '../../icons'
import { Dropdown } from '../../components'

import { Container, Handler, Indicator } from './styles'

import { Props } from './types'
import { DROPDOWN_ACTIONS } from '../../constants'

export const HistoryItem = ({ isError }: Props): JSX.Element => {
  const [isDropdownDisplay, setIsDropdownDisplay] = useState(false)

  const dropdown = useRef<HTMLDivElement>(null)

  const handleItemClick = () => setIsDropdownDisplay(true)

  const handleClickOutside = () => setIsDropdownDisplay(false)

  return (
    <>
      {isDropdownDisplay && <Handler onClick={handleClickOutside} />}
      <Container ref={dropdown} onClick={handleItemClick}>
        <Indicator isError={isError} />
        track.get
        <MoreVert className="dropdown-icon" />
        <Dropdown
          className={`dropdown-container ${
            isDropdownDisplay && 'dropdown-container--visible'
          }`}
          actions={DROPDOWN_ACTIONS}
        />
      </Container>
    </>
  )
}
