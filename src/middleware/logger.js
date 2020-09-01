const logger = (store) => (next) => (action) => {
	// setting up logger middleware for ease of troubleshooting
	console.group(action.type)
		console.log('The action item is ', action)
		const returnValue = next(action)
		console.log('The new state is ', store.getState())
	console.groupEnd()
	return returnValue
}

export default logger