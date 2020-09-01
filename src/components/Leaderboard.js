import React from 'react'
import { connect } from 'react-redux'
import User from './User'
import PropTypes from 'prop-types'

const Leaderboard = (props) => {
// display sorted users in descending order of their scores
	const {users, usersSorted} = props
	return(
		<div>
			<h4>Leaderboard</h4>
			<ul>
				{usersSorted.map(id => 
					<User key={users[id].id} user={users[id]}/>
					)	
				}
			</ul>
		</div>
		)
	}

function mapStateToProps ({ users }) {
// sort the users in the descending order of their scores
	const usersSorted = Object.keys(users)
		.sort((a,b) => users[b].score - users[a].score)
	return {
		users,
		usersSorted
	}
}

export default connect(mapStateToProps)(Leaderboard)

Leaderboard.propTypes = {
	users: PropTypes.object.isRequired,
	usersSorted: PropTypes.array.isRequired,
}