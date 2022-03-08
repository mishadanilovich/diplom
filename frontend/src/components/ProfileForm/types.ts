export interface Teachers {
  value: string
  display: string
}

export interface ProfileUser {
  firstName: string
  secondName: string
  password?: string
  role: string
  teacher?: string
  avatarURL?: string
}

export type Values = ProfileUser
