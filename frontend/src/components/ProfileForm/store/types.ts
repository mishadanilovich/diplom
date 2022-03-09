import { ProfileUser } from '../types'

export interface UpdateData extends ProfileUser {
  login: string
  password: string
}
