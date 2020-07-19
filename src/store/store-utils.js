import { Record, List } from 'immutable'

export const heroesStateStorageKey = 'heroesState'
const makeInitialState = heroes =>
  Record({
    heroes: List(heroes),
    appMessage: { content: '', type: '' }
  })()

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(heroesStateStorageKey)

    if (serializedState === null) {
      return makeInitialState([])
    }

    const state = JSON.parse(serializedState)
    const initialState = makeInitialState(state.heroes)
    return initialState
  } catch (err) {
    return makeInitialState([])
  }
}
export const saveState = state => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem(heroesStateStorageKey, serializedState)
}
