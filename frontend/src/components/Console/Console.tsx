import React, { useRef, useState } from 'react'
import { MoreVert } from '../../icons'

import {
  ConsoleContainer,
  ConsoleTextarea,
  ConsoleTextareaContainer,
  ConsoleTextareaTitle,
} from './styles'

import { CONSOLE_QUERY_TITLE, CONSOLE_RESPONSE_TITLE } from '../../constants'
import { InitialWidth } from './types'

export const Console = (): JSX.Element => {
  const [initialWidth, setInitialWidth] = useState<InitialWidth | null>(null)
  const [initialPointX, setInitialPointX] = useState(0)

  const queryConsole = useRef<HTMLDivElement>(null)
  const responseConsole = useRef<HTMLDivElement>(null)

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setInitialPointX(event.clientX)
    if (queryConsole.current && responseConsole.current)
      setInitialWidth({
        queryConsoleWidth: queryConsole.current.offsetWidth,
        responseConsoleWidth: responseConsole.current.offsetWidth,
      })
  }

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    if (
      queryConsole?.current &&
      responseConsole?.current &&
      initialWidth &&
      event.clientX !== 0
    ) {
      queryConsole.current.style.width = `${
        -1 * (initialWidth.queryConsoleWidth - initialPointX - event.clientX) -
        40
      }px`
      responseConsole.current.style.width = `${
        initialWidth.responseConsoleWidth + initialPointX - event.clientX
      }px`
    }
  }

  return (
    <ConsoleContainer>
      <ConsoleTextareaContainer ref={queryConsole}>
        <ConsoleTextareaTitle>{CONSOLE_QUERY_TITLE}</ConsoleTextareaTitle>
        <ConsoleTextarea />
      </ConsoleTextareaContainer>
      <div draggable onDragStart={handleDragStart} onDrag={handleDrag}>
        <MoreVert className="drag" />
      </div>
      <ConsoleTextareaContainer ref={responseConsole}>
        <ConsoleTextareaTitle>{CONSOLE_RESPONSE_TITLE}</ConsoleTextareaTitle>
        <ConsoleTextarea />
      </ConsoleTextareaContainer>
    </ConsoleContainer>
  )
}
