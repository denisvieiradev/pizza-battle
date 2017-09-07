import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import LoginReducer from '../modules/login/LoginReducer'

const reducers = combineReducers({
  login: LoginReducer,
})

export default createStore(reducers, {}, applyMiddleware(thunk))
