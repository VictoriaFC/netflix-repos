import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<h1>Welcome to RepoHub</h1>
			</Link>
			<h3>A site where you can find an organizations Github repositories!</h3>
		</div>
	)
}
export default Header;