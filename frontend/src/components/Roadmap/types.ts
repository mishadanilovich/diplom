import { User } from '../../hoc/AuthHoc/store/types'
import { Chapter } from '../../store/chaptersStore/types'

export interface Props {
  chapter: Chapter
  user: User
}
