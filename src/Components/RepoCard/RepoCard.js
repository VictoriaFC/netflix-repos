import React from 'react'
import { Link } from 'react-router-dom'
import './RepoCard.css'

const RepoCard = ({ repo }) => {
	const {name, language, description, starCount, forkCount, dateCreated, commitsUrl} = repo;

	return (
		// <Link to={`/Commits/${repo.name}`}>
			<div className='repo-card'>
				<Link to={`/Commits/${repo.name}`}>
					<h2>{name}</h2> 
				</Link>
				<p>{language}</p>
				<p>{description}</p>
				<p>Star Count: {starCount}</p>
				<p>Fork Count: {forkCount}</p>
				<p>Date Created: {(dateCreated).toDateString()}</p>
			</div>
		// </Link>
	)
}

export default RepoCard;