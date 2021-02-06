import {clickReducer } from './clickReducer';
import {fcReducer } from './fcReducer';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer,
    fcState: fcReducer
});