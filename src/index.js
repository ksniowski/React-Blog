import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Header from './modules/Header';

import './index.scss';

ReactDOM.render(
  <>
    <Header />
    <div className='container'>
      <Home />
    </div>
  </>,
  document.getElementById('root')
);
