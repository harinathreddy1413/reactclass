

import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';

import { applyMiddleware } from 'redux';
const redux = require('redux');
const reduxThunk = require("redux-thunk").default  // api calls middleware is redux-thunk
export const store = redux.createStore(reducer, applyMiddleware(reduxThunk));

