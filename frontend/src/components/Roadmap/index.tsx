import React, { useCallback, useMemo, useState } from 'react'
import * as naming from '../../constants'
import {
  ControlButton,
  Item,
  NotFoundText,
  Road,
  RoadmapContainer,
  RoadmapItem,
  SubmitButton,
} from './styles'
import { Add, Done, Remove } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'
import { Props } from './types'
import { Topics } from '../../routes/RoadmapPage/types'
import { isArrayEqual } from '../../helpers'
import { updateTeacherTopics } from './store/actions'

export const Roadmap = ({ topics, user }: Props) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getLoading)
  const [tempTopics, setTempTopics] = useState<Topics | null>(topics)
  const isShowSubmitButton = useMemo(
    () => !isArrayEqual(topics, tempTopics),
    [tempTopics]
  )

  const handleControllerClick = useCallback(
    (index: number) => {
      if (tempTopics)
        setTempTopics(
          tempTopics.map((el, i) =>
            i === index ? { ...el, checked: !el.checked } : el
          )
        )
    },
    [tempTopics]
  )

  const handleSubmit = () => {
    if (tempTopics) {
      const topicsData = tempTopics
        .filter((el) => el.checked)
        .map((topic) => {
          // eslint-disable-next-line no-unused-vars
          const { checked, ...data } = topic
          return data
        })
      dispatch(updateTeacherTopics({ topics: topicsData, login: user.login }))
    }
  }

  // const handleTopicClick = () => {
  //
  // }

  return (
    <>
      {!tempTopics?.length ? (
        <RoadmapContainer style={{ justifyContent: 'center' }}>
          <NotFoundText>{naming.TOPICS_NOT_FOUND}</NotFoundText>
        </RoadmapContainer>
      ) : (
        <>
          <h2>{naming.APPLICATION_NAME}</h2>
          <RoadmapContainer>
            {tempTopics.map(({ title, checked }, i) => (
              <React.Fragment key={i}>
                <RoadmapItem>
                  <Item
                    className="roadmap-item"
                    checked={typeof checked === 'boolean' ? checked : true}
                  >
                    {title}
                  </Item>
                  {user.role === naming.TEACHER && (
                    <ControlButton onClick={() => handleControllerClick(i)}>
                      {!checked && <Add />}
                      {checked && <Remove />}
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
