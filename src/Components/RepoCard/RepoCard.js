import React from 'react'
import { Link } from 'react-router-dom'
import './RepoCard.css'

const RepoCard = ({ orgName, repo }) => {
	const {name, language, description, starCount, forkCount, dateCreated} = repo;

	return (
			<div className='repo-card'>
				<div className='top-section'>
					<div className='left-side'>
						<Link to={`/${orgName}/Commits/${name}`} rel="noopener noreferrer nofollow" style={{ textDecoration: 'none' }}>
							<h2 className='repo-card-name'>{name}</h2> 
						</Link>
						<p className='repo-card-description'>{description}</p>
						<div className='repo-card-info'>
							<p className='language'>{language}</p>
							<p>Created: {(dateCreated).toDateString()}</p>
						</div>
					</div>
					<div className='right-side'>
						<p className='star-count'>⭐️ Star Count:<br></br> {starCount}</p>
						<p className='fork-count'>🍴 Fork Count:<br></br> {forkCount}</p>
					</div>
				</div>
				<div className='bottom-section'>
					<Link to={`/${orgName}/Commits/${name}`} rel="noopener noreferrer nofollow" style={{ textDecoration: 'none' }}>
						<button className='repositories-button'>View Repository Commits</button>
					</Link>
				</div>
			</div>

	)
}

export default RepoCard;