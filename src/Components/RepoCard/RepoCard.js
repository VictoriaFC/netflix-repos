import React from 'react'
import { Link } from 'react-router-dom'
import './RepoCard.css'

const RepoCard = ({ orgName, repo }) => {
	const {name, language, description, starCount, forkCount, dateCreated} = repo;

	return (
		<Link to={`/${orgName}/Commits/${name}`}>
			<div className='repo-card'>
				<h2>{name}</h2> 
				<p>{language}</p>
				<p>{description}</p>
				<p>Star Count: {starCount}</p>
				<p>Fork Count: {forkCount}</p>
				<p>Date Created: {(dateCreated).toDateString()}</p>
			</div>
		</Link>
	)
}

export default RepoCard;