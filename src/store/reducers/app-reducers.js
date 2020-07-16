import { createReducer } from '@reduxjs/toolkit'
import { Record, List } from 'immutable'
import {
  handleSetHeroes,
  handleSetAppMessage,
  handleSetCurrentHero
} from '../action-handlers'
import { SET_APP_MESSAGE, SET_HEROES, SET_CURRENT_HERO } from '../actions'

const makeInitialState = Record({
  heroes: List([]),
  currentHero: null,
  appMessage: { content: '', type: null }
})

const initialState = makeInitialState()

const appReducers = createReducer(initialState, {
  [SET_HEROES.type]: (state, action) => {
    return handleSetHeroes(state, action.payload)
  },
  [SET_CURRENT_HERO.type]: (state, action) => {
    return handleSetCurrentHero(state, action.payload)
  },
  [SET_APP_MESSAGE.type]: (state, action) => {
    return handleSetAppMessage(state, action.payload)
  }
})

export default appReducers
