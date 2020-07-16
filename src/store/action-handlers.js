export const handleSetHeroes = (state, message) => {
  const nextState = state.set('heroes', message)
  return nextState
}

export const handleSetAppMessage = (state, message) => {
  const nextState = state.set('appMessage', message)
  return nextState
}
