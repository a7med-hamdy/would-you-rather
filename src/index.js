import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './components/App';
import { Provider } from 'react-redux';
import store from '../src/redux/index';


ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


