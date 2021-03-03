import { combineReducers, createStore, compose } from 'redux';
import gameReducer from './game-reducer';
import soundReducer from './sounds-reducer';

let reducers = combineReducers({
    gamePage: gameReducer,
    sound: soundReducer
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;