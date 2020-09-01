import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function initialData() {
	// get initial data for loading up the component
	return dispatch => {
		dispatch(showLoading())
		return getInitialData()
			.then(({users,questions})=>{
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			})
	}
}