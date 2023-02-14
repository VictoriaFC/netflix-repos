import React from 'react'
import './Organization.css'

const Organization = ({org}) => {
	const {logo, orgName} = org
	return(
		<div className='organization-container'>
			<img className="org-logo" src={logo}></img>
			<p>You are currently viewing:</p>
			<h2>{orgName}</h2>
		</div>
	)
}

export default Organization;