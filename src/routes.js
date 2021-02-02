import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ROUTES } from 'constants/routes-constants';

/**
 * pages
 */
import Home from 'pages/Home';
import Heroes from 'pages/Heroes';

/**
 * components
 */
import Header from 'components/layout/Header';
import HeroDetail from 'pages/HeroesDetail/HeroDetail';

function Routes() {
  return (
    <>
      <Router>
        <Header title="React JS assessment - Junior" />
        <Switch>
          <Route key="a" exact path={ROUTES.HOME} component={Home} />
          <Route key="b" exact path={ROUTES.HEROES} component={Heroes} />
          <Route path="/heroes/:localized_name" component={HeroDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
