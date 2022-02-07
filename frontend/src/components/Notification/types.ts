type NotificationType = 'error'

export interface Props {
  type: NotificationType
  header: string
  description?: string
}

export interface ContainerProps {
  type: NotificationType
}

export type { NotificationType }
