import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { getHeroes } from '../../store/selectors'
import { FETCH_HEROES } from '../../store/actions'
import HeroCard from '../HeroCard/HeroCard'

const useStyles = makeStyles(theme => ({
  heroesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}))

function HeroesList(props) {
  useEffect(() => {
    props.fetchHeroes()
  }, [])

  const { heroes } = props
  const classes = useStyles()

  return (
    <>
      <h1>Heroes</h1>
      <div className={classes.heroesContainer}>
        {heroes
          ? heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)
          : []}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  const heroes = getHeroes(state)
  return { heroes }
}

const mapDispatchToState = dispatch => {
  return {
    fetchHeroes: () => dispatch(FETCH_HEROES())
  }
}

export default connect(mapStateToProps, mapDispatchToState)(HeroesList)
