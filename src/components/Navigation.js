import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navigation = (props) => {
  // declare the navigation URL's here
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>New Question</NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>LeaderBoard</NavLink>
        </li>
      </ul>
      <ul style={{position: 'absolute', right: 10}}>  
        <li>
          <div>
            Hi {props.authUserName}
          </div>
        </li>
        <li>
          <button onClick={props.logoutUser}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
} 

export default Navigation

Navigation.propTypes = {
  authUserName: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
}