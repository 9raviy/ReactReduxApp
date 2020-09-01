import React from 'react'
import QuestionDetailsResultCard from './QuestionDetailsResultCard'
import PropTypes from 'prop-types'

const QuestionDetailsResult = props => {
	// set the style for answer highlighting
	const {question, userReply} = props
	let styleCard
	if (userReply === 'optionOne'){
		styleCard = {
		'optionOne':"#54de90",
		'optionTwo': ""}
	}
	else {
		styleCard = {
		'optionOne':"",
		'optionTwo': "#54de90"}
	}
// calculate the percentage split of votes
	const optionOneVoteCount = question.optionOne.votes.length
	const optionTwoVoteCount = question.optionTwo.votes.length
	const voteCount = optionOneVoteCount + optionTwoVoteCount
	const optionOnePercentage = Math.round(optionOneVoteCount / (voteCount)*100)
	const optionTwoPercentage = Math.abs(optionOnePercentage - 100)
	
	// Pass on the values to display the results
	return(
		<div>
			<QuestionDetailsResultCard 
				optionVotes={optionOneVoteCount}
				optionResult={optionOnePercentage}
				voteCount={voteCount}
				selection={userReply === "optionOne"}
				questionText={question.optionOne.text}
				styleCard={styleCard.optionOne}/>
			<QuestionDetailsResultCard 
				optionVotes={optionTwoVoteCount}
				optionResult={optionTwoPercentage}
				voteCount={voteCount}
				selection={userReply === "optionTwo"}
				questionText={question.optionTwo.text}
				styleCard={styleCard.optionTwo}/>
		</div>

	)

}

export default QuestionDetailsResult

QuestionDetailsResult.propTypes = {
	question: PropTypes.object.isRequired,
	userReply: PropTypes.string.isRequired,
}