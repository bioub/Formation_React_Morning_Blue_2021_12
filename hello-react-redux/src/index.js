import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { countReducer, usersReducer } from './store/reducers';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    count: countReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [logger]
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
