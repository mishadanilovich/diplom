import { Topic } from '../../store/chaptersStore/types'

export interface Answer {
  title: string
  isCorrect: boolean
}

export interface TestItem {
  question: string
  answers: Answer[]
}

export interface Props {
  data: Topic
}
