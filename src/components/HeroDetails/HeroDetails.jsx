import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { getCurrentHero } from '../../store/selectors'
import { SET_CURRENT_HERO } from '../../store/actions'

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
  heroNameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  trashIcon: {
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
  buttonAddRemove: {
    marginTop: '30px',
    maxWidth: '200px',
    alignSelf: 'flex-end'
  }
}))

function HeroDetails(props) {
  const { hero } = props
  const classes = useStyles()
  const { id } = useParams()

  useEffect(() => {
    props.setCurrentHero(id)
  })

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
                <DeleteForeverIcon className={classes.trashIcon} />
              </div>
              <div>
                {hero.skill}
                <span>. This is what I like.</span>
              </div>
              <div className={classes.heroDescription}>{hero.description}</div>
            </div>
          </div>
          <Button
            className={classes.buttonAddRemove}
            variant="outlined"
            color="primary"
          >
            {hero.isSelected ? 'Remove from army' : 'Add to army'}
          </Button>
        </div>
      ) : (
        <div>Oops .... No hero!</div>
      )}
    </>
  )
}

const mapStateToProps = state => {
  const hero = getCurrentHero(state)
  return { hero }
}

const mapDispatchToState = dispatch => {
  return {
    setCurrentHero: id => dispatch(SET_CURRENT_HERO({ payload: id }))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(HeroDetails)
