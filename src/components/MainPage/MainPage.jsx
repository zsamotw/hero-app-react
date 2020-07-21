import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import AppTopBar from '../AppTopBar'
import HeroesList from '../HeroesList'
import HeroDetails from '../HeroDetails'
import HeroCreate from '../HeroCreate'
import * as ROUTES from '../../constants/routes'

export default function MainPage() {
  const { path } = useRouteMatch()

  return (
    <>
      <AppTopBar />
      <Layout>
        <Switch>
          <Route exact path={path}>
            <HeroesList onlySelected={false} />
          </Route>
          <Route exact path={path + ROUTES.SELECTED}>
            <HeroesList onlySelected />
          </Route>
          <Route exact path={path + ROUTES.CREATE}>
            <HeroCreate />
          </Route>
          <Route path={`${path}/:id`}>
            <HeroDetails />
          </Route>
        </Switch>
      </Layout>
    </>
  )
}

const Layout = props => {
  const { children } = props
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  )
}
