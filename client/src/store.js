import {compose, applyMiddleware,legacy_createStore as createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

const store = createStore( reducers, compose(applyMiddleware(thunk)))
export default store