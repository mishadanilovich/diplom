import { createAction } from '@reduxjs/toolkit'
import { UpdateMark } from './types'

export const setTestMark = createAction<UpdateMark>('setTestMark')
