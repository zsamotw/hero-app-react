import React from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: '45%',
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
  }
}))

export default function HeroCard(props) {
  const history = useHistory()

  const { hero } = props
  const classes = useStyles()

  function navigateHeroDetails() {
    history.push(`/${hero.id}`)
  }

  return (
    <Paper className={classes.root} onClick={navigateHeroDetails}>
      <div className={classes.avatarContainer}>
        <Avatar alt={hero.name} src={hero.photo} />
      </div>
      <div className={classes.heroDataContainer}>
        <div className={classes.heroName}>{hero.name}</div>
        <div>
          <span>Really good in </span>
          {hero.skill}
        </div>
        <div className={classes.heroDescription}>{hero.description}</div>
      </div>
    </Paper>
  )
}
