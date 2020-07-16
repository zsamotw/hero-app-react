import { createAction } from '@reduxjs/toolkit'

export const FETCH_HEROES = createAction('fetch heroes')
export const SET_HEROES = createAction('set heroes', heroes => heroes)
export const SET_CURRENT_HERO = createAction('set current hero', id => id)

export const SET_APP_MESSAGE = createAction(
  'set app message',
  message => message
)
