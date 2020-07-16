import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import * as ROUTES from '../../constants/routes'
import LandingPage from '../LandingPage'
import Alert from '../Alert'
import { getAppMessage } from '../../store/selectors'
import { SET_APP_MESSAGE, FETCH_HEROES } from '../../store/actions'

function App(props) {
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const { appMessage } = props
  const { content: appMessageContent } = appMessage

  useEffect(() => {
    props.fetchHeroes()
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
    props.setAppMessage({ content: '', type: null })
  }

  return (
    <div>
      <Router>
        <Route path={ROUTES.HEROES} component={LandingPage} />
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
        <Alert onClose={handleCloseSnackBar} severity={appMessage.status}>
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