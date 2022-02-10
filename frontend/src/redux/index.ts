/* import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { authReducer } from './reducers'
import rootSaga from './sagas'

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const createRootReducer = combineReducers({
  auth: authReducer,
})

export type RootState = ReturnType<typeof createRootReducer>

export const store = createStore(
  createRootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)*/

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { authReducer } from './reducers'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
