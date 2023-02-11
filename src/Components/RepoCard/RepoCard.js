import React from 'react'
import './RepoCard.css'

const RepoCard = ({ repo }) => {
	const {name, language, description, starCount, forkCount, dateCreated} = repo;
	
	return (
		<div className='repo-card'>
			<h2>{name}</h2> 
			<p>{language}</p>
			<p>{description}</p>
			<p>{starCount}</p>
			<p>{forkCount}</p>
			<p>{dateCreated}</p>
		</div>
	)
}

export default RepoCard;