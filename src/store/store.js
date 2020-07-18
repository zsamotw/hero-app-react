import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import appReducers from './app-reducers'
import rootEpic from './epics'
import { saveState } from './store-utils'

const epicMiddleware = createEpicMiddleware()
const store = configureStore({
  reducer: appReducers,
  middleware: [epicMiddleware]
})

epicMiddleware.run(rootEpic)

store.subscribe(() => {
  saveState(store.getState())
})

export default { store }
