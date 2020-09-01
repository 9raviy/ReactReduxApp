import logger from './logger'
import checker from './checker'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

// pass on middleware as per intended invocation
export default applyMiddleware(thunk, logger, checker)