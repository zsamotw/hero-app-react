import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { getHeroes } from '../../store/selectors'
import NoContextData from '../NoContextData'
import {
  DELETE_HERO,
  UNSELECT_HERO,
  SELECT_HERO
} from '../../store/actions'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingLeft: 0,
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  hero: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatarContainer: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  heroDataContainer: {
    width: '80%'
  },
  heroNameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  trashIcon: {
    marginLeft: '30px',
    color: theme.palette.error.main,
    cursor: 'pointer'
  },
  heroName: {
    fontWeight: 600,
    fontSize: theme.typography.headline.fontSize
  },
  heroDescription: {
    marginTop: theme.spacing(3)
  },
  heroSkill: {
    fontWeight: 600
  },
  buttonAddRemove: {
    marginTop: '30px',
    maxWidth: '200px',
    alignSelf: 'flex-end'
  }
}))

function HeroDetails(props) {
  const [hero, setHero] = useState({})
  const { heroes } = props

  const { id } = useParams()
  const idFromRoute = parseInt(id, 10)
  const history = useHistory()

  const classes = useStyles()

  useEffect(() => {
    setHero(heroes.find(h => h.id === idFromRoute))
  }, [props, heroes, idFromRoute])

  const deleteHero = () => {
    props.deleteHero(hero.id)
    history.push(ROUTES.HEROES)
  }

  const handleHeroAction = () => {
    if (hero.isSelected) props.unselectHero(hero.id)
    else props.selectHero(hero.id)
  }

  const handleClickBack = () => history.goBack()

  return (
    <>
      {hero ? (
        <div className={classes.root}>
          <div className={classes.hero}>
            <div className={classes.avatarContainer}>
              <Avatar
                className={classes.large}
                alt={hero.name}
                src={hero.photo}
              />
            </div>
            <div className={classes.heroDataContainer}>
              <div className={classes.heroNameContainer}>
                <div className={classes.heroName}>{hero.name}</div>
                <div className={classes.buttonsContainer}>
                  <Button
                    onClick={handleClickBack}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    Back
                  </Button>
                  <DeleteForeverIcon
                    className={classes.trashIcon}
                    onClick={deleteHero}
                  />
                </div>
              </div>
              <div>
                <span className={classes.heroSkill}>{hero.skill}</span>
                <span>. This is what I like.</span>
              </div>
              <div className={classes.heroDescription}>{hero.description}</div>
            </div>
          </div>
          <Button
            className={classes.buttonAddRemove}
            variant="outlined"
            color="primary"
            onClick={handleHeroAction}
          >
            {hero.isSelected ? 'Remove from army' : 'Add to army'}
          </Button>
        </div>
      ) : (
        <NoContextData />
      )}
    </>
  )
}

const mapStateToProps = state => {
  const heroes = getHeroes(state)
  return { heroes }
}

const mapDispatchToState = dispatch => {
  return {
    deleteHero: id => dispatch(DELETE_HERO({ payload: id })),
    unselectHero: id => dispatch(UNSELECT_HERO({ payload: id })),
    selectHero: id => dispatch(SELECT_HERO({ payload: id }))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(HeroDetails)
