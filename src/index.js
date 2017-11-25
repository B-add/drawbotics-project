import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';
import CustomRouter from './router';

render(
  <Provider store={Store}>
    <CustomRouter />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
