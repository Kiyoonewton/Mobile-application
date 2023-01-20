import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, composedEnhancer);
export default store;
