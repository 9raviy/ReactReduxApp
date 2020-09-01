import React, { Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading'
import { initialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import NewQuestions from './NewQuestions'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import QuestionDetail from './QuestionDetail'
import Login from './Login'
import Navigation from './Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'


class App extends Component {
	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
	    loading: PropTypes.bool.isRequired,
	  }
	componentDidMount(){
    // get initial data to display
		this.props.dispatch(initialData())
	}
	logoutUser = () => {
    // logout user by triggering action
		this.props.dispatch(setAuthedUser(null))
	}
	render(){
		const {authUserName, users} =this.props
		if (authUserName === null){
			return(
				<Login/>
				)
		}
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					    <div className="container">
					    	<Navigation
					    		authUserName={authUserName}
					    		logoutUser={this.logoutUser}/>
					    	{this.props.loading === true 
							  	? null
							  	: 
							  	<div>
									<Route exact path='/' component={Dashboard}/>
									<Route exact path='/login' component={Login}/>
									<Route path='/add' component={NewQuestions}/>
									<Route path='/questions/:id' component={QuestionDetail}/>
							        <Route exact path='/leaderboard' component={Leaderboard}/>
							    </div>
						}
				    </div>
			    </Fragment>
			</Router>
		  );
	} 
}

function mapStateToProps ({ authedUser, users }) {
	// Retrieve authed username for NavBar
	let authUserName = null
	if (users[authedUser] !== undefined) { authUserName=users[authedUser].name }
	
	return {
		loading: authedUser === null,
		authUserName,
	}
}

export default connect(mapStateToProps)(App);