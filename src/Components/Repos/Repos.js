import React, { useState, useEffect } from 'react'
import RepoCard from '../RepoCard/RepoCard'
import './Repos.css'

const Repos = ({ orgName, repos }) => {

	const repoCards = repos.map((repo) => <RepoCard key={repo.key} orgName={orgName} repo={repo}/>)
	
	return (
		<div className='repos-container'>
			{repoCards}
		</div>
	)
}


export default Repos;