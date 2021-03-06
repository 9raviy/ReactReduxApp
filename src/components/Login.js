import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import PropTypes from 'prop-types'

class Login extends Component{
	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
		users: PropTypes.array.isRequired,
	}
	state = {
		value: ''
	}
	handleChange = (e) => {
		// update the value in case of change
		const {value} = e.target
		this.setState({value})
	}
	handleLogin = (e) => {
		// trigger the action for user login
		e.preventDefault()
		const loginUser = this.state.value
		const { dispatch } = this.props
		dispatch(setAuthedUser(loginUser))
	}

	render(){
		// display login option with list of users
		const {users} = this.props
		const {value} = this.state
		return(
			<div className="container">
			<div className="center">
				<h4>Welcome to the Would You Rather quiz game</h4>
				<div>Please login to continue</div>
				<h2>Login</h2>
				 <form onSubmit={this.handleLogin}>
				  	<div className="form-group">
				    <select 
				    	className="form-control" 
				    	value={value} 
				    	onChange={this.handleChange}
				    	>
				      <option value="">Select User here</option>
						{users.map(user => 
							<option key= {user} value={user}>{user}</option>
							)
						}
				    </select>
				  </div>
				  <button type="submit" disabled = {value ===''} className="btn btn-primary">Submit</button>
				</form>
				</div>
			</div>
		)
	}
} 

function mapStateToProps ({ users }) {
	const listedUsers = Object.keys(users)
		.map(user => user)
	return {
		users: listedUsers,
	}
}

export default connect(mapStateToProps)(Login);