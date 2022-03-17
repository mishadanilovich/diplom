import React, { useState } from 'react'
import { Props } from './types'
import {
  Answer,
  AnswerSection,
  CurrentQuestion,
  QuestionCount,
  QuestionText,
  Score,
  ScoreSection,
  ScoreText,
  TestContainer,
} from './styles'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setTestMark } from './store/actions'
import { getUser } from '../../hoc/AuthHoc/store/selector'
import { User } from '../../hoc/AuthHoc/store/types'
import { useParams } from 'react-router-dom'
import { STUDENT } from '../../constants'

const questions = [
  {
    questionText:
      'Минимальное остовное дерево в связанном взвешенном неориентированном графе - это',
    answerOptions: [
      {
        answerText:
          'остовное дерево этого графа, имеющее минимальный возможный вес, где под весом дерева понимается сумма весов входящих в него рёбер',
        isCorrect: true,
      },
      {
        answerText:
          'остовное дерево этого графа, имеющее максимальный возможный вес, где под весом дерева понимается сумма весов входящих в него рёбер',
        isCorrect: false,
      },
      {
        answerText:
          'остовное дерево этого графа, имеющее средний возможный вес',
        isCorrect: false,
      },
    ],
  },
  {
    questionText: 'Критерий минимальности остова: ',
    answerOptions: [
      {
        answerText:
          'Для любого ребра, не принадлежащего остову, цикл, образуемый этим ребром при добавлении к остову, содержит рёбер тяжелее этого ребра',
        isCorrect: false,
      },
      {
        answerText:
          'Для одного ребра, не принадлежащего остову, цикл, образуемый этим ребром при добавлении к остову, не содержит рёбер тяжелее этого ребра',
        isCorrect: false,
      },
      {
        answerText:
          'Для любого ребра, не принадлежащего остову, цикл, образуемый этим ребром при добавлении к остову, не содержит рёбер тяжелее этого ребра',
        isCorrect: true,
      },
      { answerText: 'Нет критериев', isCorrect: false },
    ],
  },
]

export const Test = ({ data }: Props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector<User>(getUser)
  const { chapterName, topicName } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    let mark = score
    if (isCorrect) {
      setScore(score + 1)
      mark = score + 1
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      if (chapterName && topicName && user.role === STUDENT)
        dispatch(
          setTestMark({
            userLogin: user.login,
            teacherLogin: user.teacher as string,
            mark: `${mark}/${questions.length}`,
            quizType: 'test',
            chapterName,
            topicName,
          })
        )
    }
  }

  return (
    <TestContainer>
      {showScore ? (
        <ScoreSection className="flex-center">
          <ScoreText>Вы набрали</ScoreText>
          <Score>
            {score}
            <ScoreText style={{ margin: '0 10px' }}>из</ScoreText>
            {questions.length}
          </Score>
        </ScoreSection>
      ) : (
        <>
          <h2 style={{ marginBottom: showScore ? 0 : '30px' }}>{data.title}</h2>
          <div className="question-section">
            <QuestionCount>
              <CurrentQuestion>Вопрос {currentQuestion + 1}</CurrentQuestion>/
              {questions.length}
            </QuestionCount>
            <QuestionText>
              {questions[currentQuestion].questionText}
            </QuestionText>
          </div>
          <AnswerSection>
            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <Answer
                key={i}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </Answer>
            ))}
          </AnswerSection>
        </>
      )}
    </TestContainer>
  )
}
