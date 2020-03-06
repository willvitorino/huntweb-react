import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Products from './pages/products'

const baseUrl = '/huntweb-react/'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={baseUrl} component={Main} />
      <Route path={baseUrl+"products/:id"} component={Products} />
    </Switch>
  </BrowserRouter>
)

export default Routes
