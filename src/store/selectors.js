export const getHeroes = state => {
  const heroes = state.get('heroes')
  return heroes
}

export const getCurrentHero = state => {
  const currentHero = state.get('currentHero')
  return currentHero
}

export const getAppMessage = state => {
  const message = state.get('appMessage')
  return message
}
