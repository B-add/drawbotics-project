import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PositionsPage from './components/PositionsPage'
import CandidatesPage from './components/CandidatesPage';

const CustomRouter = () => (
  <Router>
    <Switch>
      <Route path="/candidates" component={CandidatesPage}/>
      <Route path="/" component={PositionsPage}/>
    </Switch>
  </Router>
);

export default CustomRouter;
