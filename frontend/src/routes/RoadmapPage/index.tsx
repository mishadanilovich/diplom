import React from 'react'
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
  return (
    <div className="layout-container">
      <Header />
      <h2>Теория Графов</h2>
      {topics.length && (
        <RoadmapContainer>
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
