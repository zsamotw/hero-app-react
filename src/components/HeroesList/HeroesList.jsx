import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { getHeroes, getSelectedHeroes } from '../../store/selectors'
import HeroCard from '../HeroCard/HeroCard'

const useStyles = makeStyles(theme => ({
  heroesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}))

function HeroesList(props) {
  const { heroes, selectedHeroes, onlySelected } = props
  const heroesToDisplay = onlySelected ? selectedHeroes : heroes

  const classes = useStyles()

  return (
    <>
      <h1>{onlySelected ? 'Your army' : 'Heroes'}</h1>
      <div className={classes.heroesContainer}>
        {heroesToDisplay
          ? heroesToDisplay.map(hero => <HeroCard key={hero.id} hero={hero} />)
          : []}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  const heroes = getHeroes(state)
  const selectedHeroes = getSelectedHeroes(state)
  return { heroes, selectedHeroes }
}

export default connect(mapStateToProps)(HeroesList)
