import React from 'react'
import repoHubLogo from '../../assets/RepoHub1.png'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<img src={repoHubLogo} className='repohub-logo'></img>
			</Link>
			<p>Find any organizations Github repositories by searching below!</p>
		</div>
	)
}
export default Header;