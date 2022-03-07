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
  students?: Student[]
  teachers?: Teacher[]
}

export interface AppState {
  token?: string
  error?: string
  isLoading: boolean
  user?: Student | Teacher | null
}

export interface Action<T> {
  type: string
  payload?: T
}

export interface IdentifyUser {
  login: string
}
