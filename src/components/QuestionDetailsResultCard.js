import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const QuestionDetailsResultCard = props => {
	// display the results card of the poll
	const {	optionResult, selection, optionVotes, voteCount, questionText, styleCard} = props
	return (
			<Card.Text style={{backgroundColor: styleCard}}>
			{selection && <span>Your Vote: </span>} {questionText} 			    
				<ProgressBar now={optionResult} label={`${optionResult}%`} />				
			       {optionVotes} out of {voteCount}
			</Card.Text>
		)
	
}			    

export default QuestionDetailsResultCard

QuestionDetailsResultCard.propTypes = {
	// defining the expected types
	optionResult: PropTypes.number.isRequired, 
	selection: PropTypes.bool.isRequired, 
	optionVotes: PropTypes.number.isRequired, 
	voteCount: PropTypes.number.isRequired,
	questionText: PropTypes.string.isRequired,
	styleCard: PropTypes.string.isRequired,
}	    