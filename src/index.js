import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import thunk from 'redux-thunk';
import { esES } from '@material-ui/core/locale';
import customTheme from './theme.json';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// imports reducers
import weather from './reducers/weather';
import city from './reducers/city';
import forecast from './reducers/forecast';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//const composeEnhancers = compose;

const rootReducer = combineReducers({
  currentWeather: weather,
  selectedLocation: city,
  forecastExtended: forecast,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const theme = createMuiTheme(customTheme, esES);

const app = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render( app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
