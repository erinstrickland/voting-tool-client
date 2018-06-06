import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/App'
import Results from './components/Results'

const pair = ['Trainspotting', '28 Days Later']

const routes =
<Switch> 
  <Route exact path="/" component={Voting} />
  <Route path="/results" component={Results} />
</Switch>

ReactDOM.render(
  <BrowserRouter {pair}>
    {routes}
  </BrowserRouter>,
  document.getElementById('app')
)