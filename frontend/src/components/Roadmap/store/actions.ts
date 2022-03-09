import { createAction } from '@reduxjs/toolkit'
import { UpdateData } from '../../ProfileForm/store/types'

export const updateTeacherTopics = createAction<UpdateData>(
  'updateTeacherTopics'
)
