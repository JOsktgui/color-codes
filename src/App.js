import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Layout } from 'components';
import { Home } from 'pages';

import './utils/fetch-global-api';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/'/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
