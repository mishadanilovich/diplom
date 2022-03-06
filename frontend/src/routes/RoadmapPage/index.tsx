import React, { useRef } from 'react'
import { Header } from '../../components'
import { Road, RoadmapContainer, RoadmapItem } from './styles'

const topics = [
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
      {topics.length && (
        <RoadmapContainer ref={roadmap}>
          {topics.map((_, i) => (
            <React.Fragment key={i}>
              <RoadmapItem className="roadmap-item">
                {'Иконка ' + ++i}
              </RoadmapItem>
              {topics.length !== i && <Road />}
            </React.Fragment>
          ))}
        </RoadmapContainer>
      )}
    </div>
  )
}
