import { createStore, combineReducers, applyMiddleware } from 'redux'
import albumsReducers from './reducers.js'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    albumsReducers
})

const configureStore = () => {
    return createStore(rootReducers, applyMiddleware(thunk))
}

export default configureStore
