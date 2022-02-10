export interface Items {
  value: any
  display: string
}

export interface Props {
  onChange: (value: Items) => void
  items: Items[]
  label: string
}
