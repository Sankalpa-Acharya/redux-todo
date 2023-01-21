import {rootReducer} from './reducers/index';
import {createStore} from 'redux'

export const store = createStore(rootReducer,/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
