export interface Topic {
  name: string
  title: string
}

export interface Chapter {
  name: string
  title: string
  topics: Map<string, Topic[]>
}

type Chapters = Chapter[]

export interface State {
  chapters: Chapters | null
}

export type { Chapters }
