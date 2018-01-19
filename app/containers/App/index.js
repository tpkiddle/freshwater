/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import SolutionsPage from 'containers/SolutionsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Main from 'components/Main';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - FreshWater UI Boilerplate"
        defaultTitle="FreshWater UI Boilerplate"
      >
        <meta name="description" content="FreshWater - A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/solutions" component={SolutionsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Main>
      <Footer />
    </AppWrapper>
  );
}
