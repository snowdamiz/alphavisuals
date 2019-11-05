import React from 'react';
import { Route } from 'react-router-dom';

import './index.css';
import { AppWrap } from './appStyles';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Gallery from './components/gallery/gallery';

function App() {
  return (
    <AppWrap>
      <Route path="/" component={Navigation} id="home" />
      <Route exact path="/" component={Banner} />
      <Route exact path="/" component={Services} id="services" />
      <Route exact path="/" component={Gallery} id="gallery" />
      <Route exact path="/" component={Contact} id="contact" />
    </AppWrap>
  );
}

export default App;
