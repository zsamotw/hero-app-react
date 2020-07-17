import { createAction } from '@reduxjs/toolkit'

export const FETCH_HEROES = createAction('fetch heroes')
export const SET_HEROES = createAction('set heroes', heroes => heroes)
export const DELETE_HERO = createAction('delete hero', id => id)
export const CREATE_HERO = createAction('create hero', hero => hero)
export const SELECT_HERO = createAction('select hero', id => id)
export const UNSELECT_HERO = createAction('unselect hero', id => id)
export const SET_APP_MESSAGE = createAction(
  'set app message',
  message => message
)
