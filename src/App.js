import React from 'react';
import { Route } from 'react-router-dom';

import './index.css';
import { AppWrap } from './appStyles';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import Services from './components/services/services';

function App() {
  return (
    <AppWrap>
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Banner} />
      <Route exact path="/" component={Services} />
    </AppWrap>
  );
}

export default App;
