import { createReducer } from '@reduxjs/toolkit'
import { Record, List } from 'immutable'
import {
  handleSetHeroes,
  handleSetAppMessage,
  handleSetCurrentHero,
  handleDeleteHero,
  handleCreateHero,
  handleHeroAction
} from '../action-handlers'
import {
  SET_APP_MESSAGE,
  SET_HEROES,
  SET_CURRENT_HERO,
  DELETE_HERO,
  CREATE_HERO,
  REMOVE_HERO_FROM_ARMY,
  ADD_HERO_TO_ARMY
} from '../actions'

const makeInitialState = Record({
  heroes: List(),
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
  [DELETE_HERO.type]: (state, action) => {
    return handleDeleteHero(state, action.payload)
  },
  [CREATE_HERO.type]: (state, action) => {
    return handleCreateHero(state, action.payload)
  },
  [REMOVE_HERO_FROM_ARMY.type]: (state, action) => {
    return handleHeroAction(state, action.payload, 'remove')
  },
  [ADD_HERO_TO_ARMY.type]: (state, action) => {
    return handleHeroAction(state, action.payload, 'add')
  },
  [SET_APP_MESSAGE.type]: (state, action) => {
    return handleSetAppMessage(state, action.payload)
  }
})

export default appReducers
