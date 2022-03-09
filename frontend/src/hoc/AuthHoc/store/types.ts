import { Topics } from '../../../routes/RoadmapPage/types'

export interface Student {
  login: string
  password: string
  role: string
  teacher?: string
}

export interface Teacher {
  login: string
  password: string
  role: string
}

export interface Users {
  students?: User[]
  teachers?: User[]
}

export interface AppState {
  token?: string
  error?: string
  isLoading: boolean
  user?: Student | Teacher | null
}

export interface IdentifyUser {
  login: string
}

export interface User {
  login: string
  password: string
  firstName: string
  secondName: string
  role: string
  teacher?: string
  avatarURL?: string
  topics?: Topics
}
