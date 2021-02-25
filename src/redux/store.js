import { combineReducers, createStore, compose } from 'redux';
import gameReducer from './game-reducer';

let reducers = combineReducers({
    gamePage: gameReducer
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;