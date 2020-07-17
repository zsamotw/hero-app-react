import { combineEpics } from 'redux-observable'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { FETCH_HEROES, SET_HEROES, SET_APP_MESSAGE } from './actions'

const url = 'https://run.mocky.io/v3/7ea0ccf7-89bb-4095-bfbb-af7358646ebf'

const fetchHeroesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_HEROES.type),
    mergeMap(action => {
      return ajax
        .get(url)
        .pipe(map(response => SET_HEROES({ payload: response.response })))
    }),
    catchError(error => SET_APP_MESSAGE({ content: error, type: 'error' }))
  )

export default combineEpics(fetchHeroesEpic)
