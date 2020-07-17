export const handleSetHeroes = (state, heroes) => {
  const nextState = state.set('heroes', heroes)
  return nextState
}

export const handleDeleteHero = (state, id) => {
  const message = { content: 'Hero has been deleted', type: 'info' }
  const heroes = state.get('heroes').filter(hero => hero.id !== id)
  const nextState = state.set('heroes', heroes).set('appMessage', message)
  return nextState
}

export const handleCreateHero = (state, hero) => {
  const message = { content: 'Hero has been created', type: 'info' }
  const heroes = state.get('heroes').concat([hero])
  const nextState = state.set('heroes', heroes).set('appMessage', message)
  return nextState
}

export const handleHeroAction = (state, id, type) => {
  const isSelected = type === 'select'
  const content =
    type === 'select'
      ? 'Here has been added to your army'
      : 'Here has been removed from your army'
  const message = { content, type: 'info' }
  const heroes = state
    .get('heroes')
    .map(hero => (hero.id === id ? { ...hero, isSelected } : hero))
  const nextState = state.set('heroes', heroes).set('appMessage', message)
  return nextState
}

export const handleSetAppMessage = (state, message) => {
  const nextState = state.set('appMessage', message)
  return nextState
}
