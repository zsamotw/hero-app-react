import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '45%',
    padding: theme.spacing(2),
    paddingLeft: 0,
    color: theme.palette.text.secondary,
    display: 'flex',
    marginBottom: '20px',
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
  }
}))

export default function HeroCard(props) {
  const { hero } = props
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <div className={classes.avatarContainer}>
        <Avatar alt={hero.name} src={hero.photo} />
      </div>
      <div className={classes.heroDataContainer}>
        <div>{hero.name}</div>
        <div>{hero.skill}</div>
        <div>{hero.description}</div>
      </div>
    </Paper>
  )
}
