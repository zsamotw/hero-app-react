import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
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
  alert: {
    color: theme.palette.error.main,
    fontWidth: '600',
    fontSize: theme.typography.display3.fontSize,
    marginBottom: '40px'
  }
}))

export default function NoContextData() {
  const history = useHistory()

  const theme = useTheme()
  const classes = useStyles(theme)

  const handleNavigateHeroesList = () => {
    history.push(ROUTES.HEROES)
  }

  return (
    <div className={classes.root}>
      <div className={classes.alert}>Ooops. No data to display.</div>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleNavigateHeroesList}
        >
          Check your hero here
        </Button>
      </div>
    </div>
  )
}
