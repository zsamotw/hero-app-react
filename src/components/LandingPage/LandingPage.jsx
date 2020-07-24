import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: theme.typography.display3.fontSize,
    marginBottom: '40px'
  }
}))

export default function LandingPage() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.root}>
      <div className={classes.text}>Hello with Hero App</div>
      <div>
        <Button variant="outlined" color="secondary" href={ROUTES.HEROES}>
          Start your adventure
        </Button>
      </div>
    </div>
  )
}
