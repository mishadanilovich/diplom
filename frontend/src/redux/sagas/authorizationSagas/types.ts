export interface AuthenticatePayload {
  login: string
  subLogin?: string
  password: string
}

export interface AuthenticateParams {
  payload: AuthenticatePayload
  type: AuthenticateParams
}
