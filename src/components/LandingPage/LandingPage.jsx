import React from 'react'
import MenuAppBar from '../MenuAppBar'
import MainPage from '../MainPage'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

const LandingPage = () => {
  const { path } = useRouteMatch()

  return (
    <div>
      <MenuAppBar />
      <Switch>
        <Route exact path={path}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  )
}

export default LandingPage
