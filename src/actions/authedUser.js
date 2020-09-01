import { SET_AUTHED_USER } from '../constants/ActionTypes'

// setting up action to set authorised user
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}