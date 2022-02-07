import { call, put } from 'redux-saga/effects'
import Cookies from 'js-cookie'
import api from '../../../../helpers'
import {
  authenticateFailure,
  authenticateSuccess,
  logoutSuccess,
} from '../../../actions'
import { AuthenticateParams } from '../types'
import { InitialState } from '../../../reducers/authReducer/types'

const loginApiSendsay = async ({ login, password, subLogin }: InitialState) =>
  await api.sendsay
    .login({
      login: login,
      subLogin: subLogin,
      password: password,
    })
    .then(() => {
      console.log(subLogin)
      Cookies.set('sendsay_session', api.sendsay.session)
      login && Cookies.set('user_login', login)
      subLogin && Cookies.set('user_subLogin', subLogin)
      return { session: api.sendsay.session }
    })
    .catch((err: any) => {
      document.cookie = ''
      return err
    })

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    })
  } catch ({ id }) {
    if (id === 'error/auth/failed') {
      yield call(logoutSaga)
    }
  }
}

export function* authenticateSaga({ payload }: AuthenticateParams) {
  // @ts-ignore
  const response = yield call(loginApiSendsay, payload)
  if (response.session)
    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        subLogin: payload.subLogin,
      })
    )
  else
    yield put(
      authenticateFailure({
        error: `{id: ${response?.id}, explain: ${response?.explain}}`,
      })
    )
}

export function* logoutSaga() {
  Cookies.remove('sendsay_session')
  Cookies.remove('user_login')
  Cookies.remove('user_subLogin')
  yield put(logoutSuccess())
}
