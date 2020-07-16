export const handleSetHeroes = (state, heroes) => {
  const nextState = state.set('heroes', heroes)
  return nextState
}

export const handleSetCurrentHero = (state, id) => {
  const hero = state.get('heroes').find(h => h.id === id)
  const nextState = state.set('currentHero', hero)
  return nextState
}

export const handleSetAppMessage = (state, message) => {
  const nextState = state.set('appMessage', message)
  return nextState
}
