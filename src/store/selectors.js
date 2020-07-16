export const getHeroes = state => {
  const heroes = state.get('heroes')
  return heroes
}

export const getSelectedHeroes = state => {
  const selectedHeroes = state.get('heroes').filter(hero => hero.isSelected)
  return selectedHeroes
}

export const getCurrentHero = state => {
  const currentHero = state.get('currentHero')
  return currentHero
}

export const getAppMessage = state => {
  const message = state.get('appMessage')
  return message
}
