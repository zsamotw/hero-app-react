import { createAction } from '@reduxjs/toolkit'

export const FETCH_HEROES = createAction('fetch heroes')
export const SET_HEROES = createAction('set heroes', heroes => heroes)
export const SET_CURRENT_HERO = createAction('set current hero', id => id)
export const DELETE_HERO = createAction('delete hero', id => id)
export const CREATE_HERO = createAction('create hero', hero => hero)
export const ADD_HERO_TO_ARMY = createAction('add hero to army', id => id)
export const REMOVE_HERO_FROM_ARMY = createAction(
  'remove hero from army',
  id => id
)
export const SET_APP_MESSAGE = createAction(
  'set app message',
  message => message
)
