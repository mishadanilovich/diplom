import React, { useRef } from 'react'
import { Header } from '../../components'
import { RoadmapContainer, RoadmapItem } from './styles'

const mockTopics = [
  { title: 'Тема' },
  { title: 'Тема' },
  { title: 'Тема' },
  { title: 'Тема' },
  { title: 'Тема' },
]

export const RoadmapPage = () => {
  const roadmap = useRef<HTMLDivElement>(null)

  return (
    <div className="layout-container">
      <Header />
      {mockTopics.length && (
        <RoadmapContainer ref={roadmap}>
          {mockTopics.map((_, i) => (
            <RoadmapItem className="roadmap-item" key={i}>
              {'Иконка ' + ++i}
            </RoadmapItem>
          ))}
        </RoadmapContainer>
      )}
    </div>
  )
}
