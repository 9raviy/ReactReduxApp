import {  saveQuestionAnswer, saveQuestion } from '../utils/api'
import {  ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../constants/ActionTypes'

export function receiveQuestions(questions) {
	// action dispatch to receive all questions
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function addQuestion(question) {
	// action dispatch to add a new question
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function answerQuestion(authedUser, qid, answer) {
	// action dispatch to answer a question
	return {
		type: ANSWER_QUESTION,
		authedUser, 
		qid,
		answer
	}
}

export function handleAddQuestion(optionOne, optionTwo) {
	// action dispatch to add a question
	return (dispatch, getState) => {
		const {authedUser} = getState()

		return saveQuestion({ 
			optionOneText: optionOne, 
			optionTwoText: optionTwo, 
			author:  authedUser
		})
			.then((question)=> dispatch(addQuestion(question)))	
	}
}

export function handleAnswerQuestion(qid, answer) {
	// action dispatch to answer a question
	return (dispatch, getState) => {
		const {authedUser} = getState()

		return saveQuestionAnswer ({ 
			authedUser, 
			qid, 
			answer 
		})
			.then(()=> dispatch(answerQuestion(authedUser, 
			qid, 
			answer)))
	}
}