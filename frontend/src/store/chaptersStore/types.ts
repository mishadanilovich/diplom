import { User, Users } from '../../hoc/AuthHoc/store/types'

export interface Mark {
  userLogin: string
  teacherLogin: string
  chapterName: string
  topicName: string
  taskMark: number | null
  testMark: number | null
}

export interface Topic {
  name: string
  title: string
  show: boolean
}

export interface UpdateChaptersPayload {
  chapterName: string
  topics: Topic[]
}

export interface InitializeChapters {
  user: User
  users: Users
}

export interface Chapter {
  name: string
  title: string
  topics: Topic[]
}

type Chapters = Chapter[]

export interface State {
  chapters: Chapters | null
}

export type { Chapters }
