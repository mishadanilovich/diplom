import { Student, Teacher } from '../../hoc/AuthHoc/store/types'

export interface User {
  login: string
  password: string
  roles: string
}

export interface Users {
  teachers: Teacher[]
  students: Student[]
}
