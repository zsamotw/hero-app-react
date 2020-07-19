import { combineEpics, ofType } from 'redux-observable'
import { filter, map, mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { FETCH_HEROES, SET_HEROES, SET_APP_MESSAGE } from './actions'

const url = 'https://run.mocky.io/v3/7ea0ccf7-89bb-4095-bfbb-af7358646ebf'

const fetchHeroesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_HEROES.type),
    mergeMap(() => {
      return ajax.get(url).pipe(
        filter(response => !!response),
        map(response => SET_HEROES({ payload: response.response })),
        catchError(() =>
          of(
            SET_APP_MESSAGE({
              payload: {
                content: 'Server error. Cannot fetch data',
                type: 'error'
              }
            })
          )
        )
      )
    })
  )

export default combineEpics(fetchHeroesEpic)
