import React from 'react'
import { CardFooter, DragItem } from './styles'
import { ListItemProps } from './types'

const ListItem = ({ item, provided }: ListItemProps) => {
  return (
    <DragItem
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <span>{item.id}</span>
      <CardFooter>
        <span>{item.content}</span>
      </CardFooter>
    </DragItem>
  )
}

export default ListItem
