import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '80vh'
  },
  text: {
    color: theme.palette.text.primary,
    fontWidth: '600',
    fontSize: theme.typography.display3.fontSize,
    marginBottom: '40px'
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    marginLeft: '20px',
    '&:hover': {
      color: theme.palette.secondary.light
    }
  }
}))

export default function LandingPage() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.root}>
      <div className={classes.text}>Hello Foo with Hero</div>
      <div>
        <Link className={classes.link} to={ROUTES.HEROES}>
          Start your adventure
        </Link>
      </div>
    </div>
  )
}
