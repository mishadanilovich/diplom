export interface Topic {
  name: string
  title: string
  checked?: boolean
  iconUrl?: string
}

type Topics = Topic[]

export type { Topics }
