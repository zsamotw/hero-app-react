import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    textTransform: 'uppercase',
    backgroundColor: theme.palette.secondary.main
  }
}))

function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const history = useHistory()

  const theme = useTheme()
  const classes = useStyles(theme)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleNavigateHeroesList = () => {
    history.push(ROUTES.HEROES)
    setAnchorEl(null)
  }

  const handleNavigateArmyList = () => {
    history.push(ROUTES.SELECTED)
    setAnchorEl(null)
  }

  const handleNavigateHeroCreate = () => {
    history.push(ROUTES.CREATE)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              to={ROUTES.HEROES}
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              Hero App
            </Link>
          </Typography>
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <Avatar className={classes.avatar}>M</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleNavigateHeroesList}>Heroes</MenuItem>
              <MenuItem onClick={handleNavigateArmyList}>My army</MenuItem>
              <MenuItem onClick={handleNavigateHeroCreate}>
                Create hero
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToState = dispatch => {
  return {}
}

export default connect(null, mapDispatchToState)(MenuAppBar)
