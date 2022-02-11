import { configureStore, getDefaultMiddleware, Reducer } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { createRootReducer } from './rootReducer'
import sagas from './rootSaga'

const sagaMiddleware = createSagaMiddleware({})
const middlewares = [sagaMiddleware]

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: false,
  }),
  ...middlewares,
]

const rootReducer: Reducer = createRootReducer()

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
})

sagaMiddleware.run(sagas)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
