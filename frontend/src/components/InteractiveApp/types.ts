import { DraggableProvided } from 'react-beautiful-dnd'

export interface Item {
  id: string
  content: string
}

export interface ListItemProps {
  item: Item
  provided: DraggableProvided
}
