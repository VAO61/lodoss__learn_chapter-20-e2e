import './assets/scss/style.scss';
import './App.scss';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import browserHistory from './browserHistory';

import Header from './components/Header/Header';
import MyListPage from './pages/MyListPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer/Footer';

function App() {
  if (browserHistory.location.pathname === '/') {
    browserHistory.push('/search');
  }
  return (
    <Router history={browserHistory}>
      <div className="app">
        <Header className="app__header" />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/my-list" component={MyListPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer className="app__footer" />
      </div>
    </Router>
  );
}

export default App;
