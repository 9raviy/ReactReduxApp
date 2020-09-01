  
import { ANSWER_QUESTION } from '../constants/ActionTypes'

const checker = (store) => (next) => (action) => {
// insert alert if the question is already answered
	if (action.type === ANSWER_QUESTION) {
		if (store.getState().users[action.authedUser].answers[action.qid] !== undefined){
			return alert("You already answered this one")
		}
	} 
	return next(action)
		
}

export default checker