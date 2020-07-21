import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  root: {
    width: '45%',
    height: '100px',
    padding: theme.spacing(2),
    paddingLeft: 0,
    color: theme.palette.text.secondary,
    display: 'flex',
    marginBottom: '20px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  avatarContainer: {
    width: '15%',
    display: 'flex',
    justifyContent: 'center'
  },
  heroDataContainer: {
    width: '80%'
  },
  heroName: {
    fontWeight: 600
  },
  heroDescription: {
    marginTop: theme.spacing(2)
  },
  heroSkill: {
    fontWeight: 600
  }
}))

export default function HeroCard(props) {
  const [heroDescription, setHeroDescription] = useState('')
  const { hero } = props

  const history = useHistory()

  const classes = useStyles()

  const navigateHeroDetails = () => history.push(`${ROUTES.HEROES}/${hero.id}`)

  const truncateDescription = description =>
    description.length > 100
      ? description.slice(0, 100).concat('(...)')
      : description

  useEffect(() => {
    setHeroDescription(truncateDescription(hero.description))
  }, [hero])

  return (
    <Paper className={classes.root} onClick={navigateHeroDetails}>
      <div className={classes.avatarContainer}>
        <Avatar alt={hero.name} src={hero.photo} />
      </div>
      <div className={classes.heroDataContainer}>
        <div className={classes.heroName}>{hero.name}</div>
        <div>
          <span>Really good in </span>
          <span className={classes.heroSkill}>{hero.skill}</span>
        </div>
        <div className={classes.heroDescription}>{heroDescription}</div>
      </div>
    </Paper>
  )
}
