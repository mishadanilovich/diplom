export interface DataItem {
  testMark: number | null
  taskMark: number | null
  username: string
}

export interface Props {
  data: DataItem[] | null
}
