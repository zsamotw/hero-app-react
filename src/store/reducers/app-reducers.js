import { createReducer } from '@reduxjs/toolkit'
import { Record, List } from 'immutable'
import {
  handleSetHeroes,
  handleSetAppMessage,
  handleDeleteHero,
  handleCreateHero,
  handleHeroAction
} from '../action-handlers'
import {
  SET_APP_MESSAGE,
  SET_HEROES,
  DELETE_HERO,
  CREATE_HERO,
  UNSELECT_HERO,
  SELECT_HERO
} from '../actions'

const makeInitialState = Record({
  heroes: List(),
  appMessage: { content: '', type: null }
})

const initialState = makeInitialState()

const appReducers = createReducer(initialState, {
  [SET_HEROES.type]: (state, action) => {
    return handleSetHeroes(state, action.payload)
  },
  [DELETE_HERO.type]: (state, action) => {
    return handleDeleteHero(state, action.payload)
  },
  [CREATE_HERO.type]: (state, action) => {
    return handleCreateHero(state, action.payload)
  },
  [UNSELECT_HERO.type]: (state, action) => {
    return handleHeroAction(state, action.payload, 'unselect')
  },
  [SELECT_HERO.type]: (state, action) => {
    return handleHeroAction(state, action.payload, 'select')
  },
  [SET_APP_MESSAGE.type]: (state, action) => {
    return handleSetAppMessage(state, action.payload)
  }
})

export default appReducers
