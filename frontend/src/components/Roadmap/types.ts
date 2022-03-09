import { Topics } from '../../routes/RoadmapPage/types'
import { User } from '../../hoc/AuthHoc/store/types'

export interface Props {
  topics: Topics | null
  user: User
}
