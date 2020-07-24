export const getHeroes = state => {
  const heroes = state.get('heroes')
  return heroes
}

export const getSelectedHeroes = state => {
  const selectedHeroes = state.get('heroes').filter(hero => hero.isSelected)
  return selectedHeroes
}

export const getSelectedHeroesCount = state => {
  const selectedHeroes = state.get('heroes').filter(hero => hero.isSelected)
  return selectedHeroes.length || selectedHeroes.size
}

export const getAppMessage = state => {
  const message = state.get('appMessage')
  return message
}
