import AppBar from '@material-ui/core/AppBar'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import AppMenu from '../AppMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    '&:hover': {
      color: theme.palette.secondary.light
    }
  }
}))

export default function AppTopBar() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={ROUTES.HEROES} className={classes.link}>
              Hero App
            </Link>
          </Typography>
          <AppMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}
