import React from 'react'

export interface Action {
  name: string
  action: () => void
  isDestructive?: boolean
}

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  actions: Action[]
}

export interface ActionItemProps {
  isDestructive?: boolean
}
