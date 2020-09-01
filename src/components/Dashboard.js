import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Question from './Question'

class Dashboard extends Component {
	static propTypes = {
	    unansweredQuestions: PropTypes.array.isRequired,
	    answeredQuestions: PropTypes.array.isRequired,
		users: PropTypes.object.isRequired,
	}

	state = {
	// set flag as true when the component is initialized
		showUnansweredQues: true,
	}

	toggle = () => {
	// toggle the flag reflecting user choice
		this.setState((prevState) => ({
			showUnansweredQues: !prevState.showUnansweredQues
		}))
	}

	render(){
	// display unanswered or answered questions on the home page
		const {unansweredQuestions, answeredQuestions, users} = this.props
		const {showUnansweredQues}= this.state
		let displayedQuestions
		showUnansweredQues
		? displayedQuestions = unansweredQuestions
		: displayedQuestions = answeredQuestions
		return(
			<div>
				<div className='center'>
					<h4>Dashboard</h4>
					<button 
						className="btn btn-primary"
						onClick = {this.toggle}
						disabled={showUnansweredQues}>Unanswered Questions</button>
					<button 
						className="btn btn-primary"
						onClick = {this.toggle}
						disabled={!showUnansweredQues}>Answered Questions</button>
				</div>
				<ul>
					{displayedQuestions.map((question) => (
						<li key={question.id}>
							<Question 
								question = {question}
								author = {users[question.author]} /> 
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({ questions, authedUser, users }) {
// sort depending upon the status of answered/unanswered questions
	const user = users[authedUser]
	let answeredQuestionIds = []
	if (user !== undefined) {answeredQuestionIds = user.answers} 
	let unansweredQuestions = []
	let answeredQuestions = []
	for (const key in questions) {
		if (answeredQuestionIds[key] === undefined){
			unansweredQuestions.push(questions[key])
		} else
		{
			answeredQuestions.push(questions[key])
		}
	}

	return {
		users,
		unansweredQuestions: unansweredQuestions
			.sort((b, a) => a.timestamp - b.timestamp),
		answeredQuestions: answeredQuestions
			.sort((b, a) => a.timestamp - b.timestamp)
	}
}
export default connect(mapStateToProps)(Dashboard)