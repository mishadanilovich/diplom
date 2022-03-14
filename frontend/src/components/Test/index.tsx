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
    questionText: 'What is the capital of France?',
    answerOptions: [
      {
        answerText: 'New dsafasdfdsafasdfsdfasdfsafasdfdsfds York',
        isCorrect: false,
      },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
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
            mark,
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
