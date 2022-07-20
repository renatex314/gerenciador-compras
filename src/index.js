import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import GlobalCSS from './components/global-style';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.render(
  
  <Provider store={store}>
    <GlobalCSS />
    <App/>
  </Provider>

,document.getElementById('root'));