import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import MenuAppBar from '../MenuAppBar'
import HeroesList from '../HeroesList'
import HeroDetails from '../HeroDetails'
import HeroCreate from '../HeroCreate'

const LandingPage = () => {
  const { path } = useRouteMatch()

  return (
    <div>
      <MenuAppBar />
      <Grid container>
        <Grid xs={1} />
        <Grid item xs={10}>
          <Switch>
            <Route exact path="/selected">
              <HeroesList onlySelected={true} />
            </Route>
            <Route exact path="/create">
              <HeroCreate />
            </Route>
            <Route path="/:id">
              <HeroDetails />
            </Route>
            <Route exact path={path}>
              <HeroesList onlySelected={false} />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingPage
