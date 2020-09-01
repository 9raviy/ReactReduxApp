import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import {formatDate} from '../utils/helpers'
import PropTypes from 'prop-types'

class Question extends Component {
	static propTypes = {
		question: PropTypes.object.isRequired,
		author: PropTypes.object.isRequired,
	}
	poll = (e, id) => {
		// pass on the question id
		e.preventDefault()
		this.props.history.push(`/questions/${id}`)
	}
	render(){
		// display the would you rather question with clickable poll button
		const {question, author} = this.props
		const formattedDate = formatDate(question.timestamp)
		return(
			<Card>
			  <Card.Header>{formattedDate} - {author.name} asks:</Card.Header>
			  <Card.Body>
				  <img className='avatar' src={author.avatarURL} alt={`${author.name}`}/>
			    <Card.Title>
					Would you rather?
				</Card.Title>
			    <Card.Text>
			       {question.optionOne.text} Or {question.optionTwo.text}
			    </Card.Text>
			    <button className="btn btn-primary" onClick={(e) => this.poll(e, question.id)}>View Poll</button>
			  </Card.Body>
			</Card>
		)
	}
}

export default withRouter(Question)