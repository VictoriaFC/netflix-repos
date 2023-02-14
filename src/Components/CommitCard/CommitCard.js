import React from 'react'
import { Link } from 'react-router-dom'

import './CommitCard.css'

const CommitCard = ({commit}) => {
	const {commitTitle, committerUsername, committerAvatar, commitHash, commitUrl, commitDateCreated} = commit
	return(
		<div className='commit-card'>
			<div className='commit-card-left'>
				<a href={commitUrl} className='title-button' target="_blank" style={{ textDecoration: 'none' }}>{commitTitle}</a>				
				<div className='committer-info'>
					<img className='committer-avatar' src={committerAvatar}></img>
					<div className='commiter-username'>{committerUsername} </div>
					<div> committed on: {(commitDateCreated).toDateString()}</div>
				</div>
			</div>
			
			<div className='commit-card-right'>
				<a href={commitUrl} className='github-button' target="_blank">View it on Github</a>
			</div>

		</div>

	)
}

export default CommitCard;