import { createAction } from '@reduxjs/toolkit'

export const SET_APP_MESSAGE = createAction(
  'set app message',
  message => message
)
