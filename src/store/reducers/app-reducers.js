import { createReducer } from '@reduxjs/toolkit'
import { Record } from 'immutable'
import { handleSetAppMessage } from '../action-handlers'
import { SET_APP_MESSAGE } from '../actions'

const makeInitialState = Record({
  heros: [],
  appMessage: { content: '', type: null }
})

const initialState = makeInitialState()

const appReducers = createReducer(initialState, {
  [SET_APP_MESSAGE.type]: (state, action) => {
    return handleSetAppMessage(state, action.payload)
  }
})

export default appReducers
