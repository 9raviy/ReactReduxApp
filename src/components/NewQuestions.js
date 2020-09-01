import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

class NewQuestion extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
	}
	state = {
		optionOne: '',
		optionTwo: '',
	}

	handleChange = (e) => {
		// update the state in case of change of values
		const {value, name} = e.target
		this.setState(() => ({ [name] : value,
		}))
	}

	handleSubmit = (e) => {
		// accept the new question entered by the user
		e.preventDefault()
		const { dispatch } = this.props
		const { optionOne, optionTwo } = this.state
		dispatch(handleAddQuestion(optionOne, optionTwo))
		this.props.history.push('/')
	}

	render(){
		// take user input for the two options
		const {optionOne, optionTwo} = this.state
		return(
			<div className='center'>
				<h4>Create a new Would You Rather Question</h4>
				<Form onSubmit={this.handleSubmit}>
				  <Form.Group>
				  	<Form.Label>Would you rather... </Form.Label>
				    <Form.Control
				    	value = {optionOne}
						onChange = {this.handleChange}
				    	type="text"
				    	placeholder="Enter the first option here"
				    	name = 'optionOne'/>
				  </Form.Group>
				  <Form.Group>
				    <Form.Label>OR</Form.Label>
				    <Form.Control
					    value = {optionTwo}
						onChange = {this.handleChange} 
					    type="text" 
					    placeholder="Enter the second option here" 
					    name = 'optionTwo'/>
				  </Form.Group>
				  <button 
				  		className="btn btn-primary" 
				  		type="submit"
				  		disabled={ optionOne==='' || optionTwo==='' || optionOne===optionTwo }>
				    Submit
				  </button>
				</Form>
			</div>
		)
	}
}

export default withRouter(connect()(NewQuestion))