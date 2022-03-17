import { takeLatest } from 'redux-saga/effects'
import * as Lockr from 'lockr'
import { setTestMark } from './actions'
import { Action } from '../../../store/types'
import { UpdateMark } from './types'
import { Mark } from '../../../store/chaptersStore/types'

function* updateMark({ payload }: Action<UpdateMark>) {
  if (!payload) return
  const marks = Lockr.get<Mark[]>('marks')
  if (marks) {
    const userPrevMarks = marks.find(
      (el) =>
        el.userLogin === payload.userLogin &&
        el.chapterName === payload.chapterName &&
        el.topicName === payload.topicName
    )
    if (userPrevMarks) {
      Lockr.set(
        'marks',
        marks.map((el) =>
          el.userLogin === payload.userLogin &&
          el.chapterName === payload.chapterName &&
          el.topicName === payload.topicName
            ? {
                ...el,
                [payload.quizType === 'test' ? 'testMark' : 'taskMark']:
                  payload.mark,
              }
            : el
        )
      )
    } else {
      const { mark, quizType, ...data } = payload
      Lockr.set('marks', [
        ...marks,
        {
          ...data,
          [quizType === 'test' ? 'testMark' : 'taskMark']: mark,
          [quizType === 'test' ? 'taskMark' : 'testMark']: null,
        },
      ])
    }
  } else {
    const { mark, quizType, ...data } = payload
    Lockr.set('marks', [
      {
        ...data,
        [quizType === 'test' ? 'testMark' : 'taskMark']: mark,
        [quizType === 'test' ? 'taskMark' : 'testMark']: null,
      },
    ])
  }
}

export function* testSaga() {
  yield takeLatest(setTestMark, updateMark)
}
