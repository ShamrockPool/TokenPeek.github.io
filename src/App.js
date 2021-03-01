import * as queries from './assets/queries/quickqueries';
import GAListener from 'components/GAListener';
import { MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
require('./styles/reduction.scss');

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const QuickQueriesPage = React.lazy(() => import('pages/QuickQueriesPage'));
const AdaFoliosPage = React.lazy(() => import('pages/AdaFoliosPage'));
const FunDumpPage = React.lazy(() => import('pages/FunDumpPage'));
const AboutUsPage = React.lazy(() => import('pages/AboutUsPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" render={(props) => <DashboardPage {...props} key={Math.floor(Math.random() * 100) + Date.now()} query={'&excluderetired=1'} />} />             
              </React.Suspense>
            </MainLayout>
              <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width}) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);