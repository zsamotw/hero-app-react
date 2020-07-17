import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    '&:hover': {
      color: theme.palette.secondary.light
    }
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    textTransform: 'uppercase',
    backgroundColor: theme.palette.secondary.main
  }
}))

function AppMenu() {
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
    <>
      <div className={classes.menu}>
        <Link to={ROUTES.HEROES} className={classes.link}>
          Heroes
        </Link>
        <Link to={ROUTES.SELECTED} className={classes.link}>
          Army
        </Link>
        <Link to={ROUTES.CREATE} className={classes.link}>
          Create hero
        </Link>
      </div>
      <div className={classes.menuMobile}>
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
          <MenuItem onClick={handleNavigateArmyList}>Army</MenuItem>
          <MenuItem onClick={handleNavigateHeroCreate}>Create hero</MenuItem>
        </Menu>
      </div>
    </>
  )
}

const mapDispatchToState = dispatch => {
  return {}
}

export default connect(null, mapDispatchToState)(AppMenu)
