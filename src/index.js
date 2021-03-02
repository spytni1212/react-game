import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'
import Header from './components/Header/Header';
import App from './components/App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Header />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

