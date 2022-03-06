export interface User {
  login: string
  password: string
  roles: string
}

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
  teachers: Teacher[]
  students: Student[]
}
