import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'

// combine all reducers into one
export default combineReducers({users, questions, authedUser, loadingBar: loadingBarReducer})