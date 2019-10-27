import React from 'react';
import { Route } from 'react-router-dom';

import './index.css';
import { AppWrap } from './appStyles';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';

function App() {
  return (
    <AppWrap>
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Banner} />
    </AppWrap>
  );
}

export default App;
