import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import * as ROUTES from '../../constants/routes'
import MainPage from '../MainPage'
import LandingPage from '../LandingPage'
import Alert from '../Alert'
import { getAppMessage } from '../../store/selectors'
import { SET_APP_MESSAGE, FETCH_HEROES } from '../../store/actions'
import NoContextData from '../NoContextData'

function App(props) {
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const lastFetchHeroesDateStorageKey = 'lastFetchHeroesDate'

  const { appMessage } = props
  const { content: appMessageContent } = appMessage

  const dateDiffInDays = (date1, date2) => {
    const millisecondsPerDay = 1000 * 60 * 60 * 24
    const utc1 = Date.UTC(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    )
    const utc2 = Date.UTC(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    )

    return Math.floor((utc2 - utc1) / millisecondsPerDay)
  }

  useEffect(() => {
    const savedLastFetchHeroDate = localStorage.getItem(
      lastFetchHeroesDateStorageKey
    )
    const lastFetchHeroesDate = new Date(savedLastFetchHeroDate)
    const now = new Date()
    const dateDiff = dateDiffInDays(lastFetchHeroesDate, now)
    const maxDayDiff = 3
    if (savedLastFetchHeroDate === null && dateDiff > maxDayDiff) {
      localStorage.setItem(lastFetchHeroesDateStorageKey, new Date())
      props.fetchHeroes()
    }
  }, [])

  useEffect(() => {
    if (appMessageContent) {
      setOpenSnackBar(true)
    }
  }, [appMessageContent])

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackBar(false)
    props.setAppMessage({ content: '', type: '' })
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={ROUTES.ROOT}>
            <LandingPage />
          </Route>
          <Route path={ROUTES.HEROES}>
            <MainPage />
          </Route>
          <Route>
            <NoContextData description="404 heroes" />
          </Route>
        </Switch>
      </Router>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleCloseSnackBar} severity={appMessage.type}>
          {appMessage.content}
        </Alert>
      </Snackbar>
    </div>
  )
}

const mapStateToProps = state => {
  const appMessage = getAppMessage(state)
  return { appMessage }
}

const mapDispatchToState = dispatch => {
  return {
    setAppMessage: message => dispatch(SET_APP_MESSAGE({ payload: message })),
    fetchHeroes: () => dispatch(FETCH_HEROES())
  }
}

export default connect(mapStateToProps, mapDispatchToState)(App)
