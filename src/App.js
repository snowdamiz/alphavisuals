import React from 'react';
import { Route } from 'react-router-dom';

import './index.css';
import { AppWrap } from './appStyles';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import BlackFriday from './components/blackfriday/blackfriday';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Gallery from './components/gallery/gallery';
import Dj from './components/dj/dj';
import Ourteam from './components/ourteam/ourteam';
import Purchase from './components/purchase/purchase';

function App() {
  return (
    <AppWrap>
      <Route exact path="/" component={Navigation} />
      <Route exact path="/" component={Banner} />
      <Route exact path="/" component={BlackFriday} id="services" />
      <Route exact path="/" component={Services} />
      <Route exact path="/" component={Dj} />
      <Route exact path="/" component={Ourteam} />
      {/* <Route exact path="/" component={Gallery} id="gallery" /> */}
      {/* <Route exact path="/" component={Contact} id="contact" /> */}
      <Route exact path="/appointment" component={Purchase} />
    </AppWrap>
  );
}

export default App;
