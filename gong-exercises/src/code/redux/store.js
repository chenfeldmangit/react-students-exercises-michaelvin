import {createStore, combineReducers, applyMiddleware} from 'redux'
import connectionReducer from './reducers/connectionRedusers'
import tweetReducer from './reducers/tweetRedusers'
import notificationReducer from './reducers/notificationRedusers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import {composeWithDevTools} from 'redux-devtools-extension'


const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
    users: connectionReducer,
    tweets: tweetReducer,
    notifications: notificationReducer
});

// const store = createStore(combinedReducers, [], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;