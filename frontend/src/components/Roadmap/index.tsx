import React, { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as naming from '../../constants'
import {
  ControlButton,
  Item,
  NotFoundText,
  Road,
  RoadmapContainer,
  RoadmapItem,
  StyledTitle,
  SubmitButton,
} from './styles'
import { Add, Done, Remove } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'
import { Props } from './types'
import { Topics } from '../../routes/RoadmapPage/types'
import { isArrayEqual } from '../../helpers'
import { updateTeacherTopics } from './store/actions'

export const Roadmap = ({ chapter, user }: Props) => {
  const { title, topics, name } = chapter
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getLoading)
  const navigate = useNavigate()
  const [tempTopics, setTempTopics] = useState<Topics>(topics)
  const isShowSubmitButton = useMemo(
    () => !isArrayEqual(topics, tempTopics),
    [tempTopics, topics]
  )

  const handleControllerClick = useCallback(
    (index: number) => {
      setTempTopics(
        tempTopics.map((el, i) =>
          i === index ? { ...el, show: !el.show } : el
        )
      )
    },
    [tempTopics]
  )

  const handleSubmit = () =>
    dispatch(
      updateTeacherTopics({
        topics: tempTopics,
        login: user.login,
        chapterName: name,
      })
    )

  const handleTopicClick = (topicName: string) => {
    console.log(topicName)
    navigate(topicName)
  }

  return (
    <>
      {!tempTopics?.length ? (
        <RoadmapContainer style={{ justifyContent: 'center' }}>
          <NotFoundText>{naming.TOPICS_NOT_FOUND}</NotFoundText>
        </RoadmapContainer>
      ) : (
        <>
          <StyledTitle>{title}</StyledTitle>
          <RoadmapContainer>
            {tempTopics.map(({ name, title, show }, i) => (
              <React.Fragment key={i}>
                <RoadmapItem>
                  <Item
                    className="roadmap-item"
                    show={show}
                    onClick={() => handleTopicClick(name)}
                  >
                    {title}
                  </Item>
                  {user.role === naming.TEACHER && (
                    <ControlButton onClick={() => handleControllerClick(i)}>
                      {!show && <Add />}
                      {show && <Remove />}
                    </ControlButton>
                  )}
                </RoadmapItem>
                {tempTopics.length - 1 !== i && <Road />}
              </React.Fragment>
            ))}
            {user.role === naming.TEACHER && isShowSubmitButton && (
              <SubmitButton isLoading={isLoading} onClick={handleSubmit}>
                {naming.BUTTON_READY}
                <Done />
              </SubmitButton>
            )}
          </RoadmapContainer>
        </>
      )}
    </>
  )
}
