
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { Store } from '././reduxs/store';

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={Store}>
    <App />
  
  </Provider>,
  document.getElementById('root')
);


