import React from 'react'
import { Link } from 'react-router-dom'

import './CommitCard.css'

const CommitCard = ({commit}) => {
	const {commitTitle, committerUsername, commitHash, commitUrl, commitDateCreated} = commit
	return(
		<div className='commit-card'>
			<h3>{commitTitle}</h3>
			<p>{committerUsername}</p>
			<a href={commitUrl} target="_blank">{commitHash}</a>
			<div>{(commitDateCreated).toDateString()}</div>
		</div>
	)
}

export default CommitCard;