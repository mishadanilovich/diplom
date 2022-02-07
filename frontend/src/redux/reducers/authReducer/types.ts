export interface InitialState {
  loading?: boolean
  sessionKey?: string | null
  login?: string | null
  subLogin?: string | null
  password?: string | null
  error?: string
}

export interface Action {
  type: string
  payload?: InitialState
}
