import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable';
import appReducers from './reducers/app-reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware()
const store = configureStore({
  reducer: appReducers,
  middleware: [epicMiddleware]
})

epicMiddleware.run(rootEpic)

export default { store }
