import {createStore, combineReducers} from 'redux'
import connectionReducer from './reducers/connectionRedusers'
import tweetReducer from './reducers/tweetRedusers'


const combinedReducers = combineReducers({
    usersList: connectionReducer,
    tweetList: tweetReducer
});

const store = createStore(combinedReducers, [], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;