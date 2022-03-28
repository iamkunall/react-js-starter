import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/index';

import About from '../pages/about';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
