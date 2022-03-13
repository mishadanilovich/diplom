import { createAction } from '@reduxjs/toolkit'
import { Chapters } from './types'

export const setInitialChapters = createAction<Chapters>('setInitialChapters')
