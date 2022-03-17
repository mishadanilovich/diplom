import React, { useState } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import ListItem from './ListItem'
import { Container, Separator } from './styles'

const getItems = (id: number) => [
  { id: `${id}-one`, content: 'one' },
  { id: `${id}-two`, content: 'two' },
  { id: `${id}-three`, content: 'three' },
  { id: `${id}-four`, content: 'four' },
  { id: `${id}-five`, content: 'five' },
]

export const InteractiveApp = () => {
  const [items, setItems] = useState(getItems(1))
  const [items2] = useState(getItems(2))

  const onDragEnd = (result: DropResult) => {
    console.log(result)
    if (!result.destination) return
    const newItems = Array.from(items)
    const [removed] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, removed)
    setItems(newItems)
  }

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => <ListItem provided={provided} item={item} />}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
        <Separator />
        <Droppable droppableId="droppable2">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items2.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => <ListItem provided={provided} item={item} />}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  )
}
