import { RECEIVE_USERS} from '../constants/ActionTypes'

export function receiveUsers(users) {
	// receive users data action dispatch
	return {
		type: RECEIVE_USERS,
		users
	}
}