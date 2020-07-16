export const handleSetHeroes = (state, heroes) => {
  const nextState = state.set('heroes', heroes)
  return nextState
}

export const handleSetCurrentHero = (state, id) => {
  const currentHero = state.get('heroes').find(hero => hero.id === id)
  const nextState = state.set('currentHero', currentHero)
  return nextState
}

export const handleDeleteHero = (state, id) => {
  const heroes = state.get('heroes').filter(hero => hero.id !== id)
  const nextState = state.set('heroes', heroes)
  return nextState
}

export const handleRemoveHeroFromArmy = (state, id) => {
  const heroes = state
    .get('heroes')
    .map(hero => (hero.id === id ? { ...hero, isSelected: false } : hero))
  const currentHero = heroes.find(hero => hero.id === id)
  const nextState = state.set('heroes', heroes).set('currentHero', currentHero)
  return nextState
}

export const handleAddHeroToArmy = (state, id) => {
  const heroes = state
    .get('heroes')
    .map(hero => (hero.id === id ? { ...hero, isSelected: true } : hero))
  const currentHero = heroes.find(hero => hero.id === id)
  const nextState = state.set('heroes', heroes).set('currentHero', currentHero)
  return nextState
}

export const handleSetAppMessage = (state, message) => {
  const nextState = state.set('appMessage', message)
  return nextState
}
