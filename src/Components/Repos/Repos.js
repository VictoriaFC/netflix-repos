import React, { useState, useEffect } from 'react'
import RepoCard from '../RepoCard/RepoCard'
import fetchRepos from '../../apiCalls'
import './Repos.css'

const Repos = () => {
	const [repos, setRepos] = useState([]);

	const getRepos = async () => {
		const reposData = await fetchRepos();
		const refinedReposData = reposData.map((repoData, index) => {
			return {
				name: repoData.name,
				language: repoData.language, 
				description: repoData.description,
				starCount: repoData.stargazers_count,
				forkCount: repoData.forks_count,
				dateCreated: repoData.created_at,
				key: index
			}
		})
		setRepos(refinedReposData)
	}

	useEffect(() => {
		getRepos();
	}, [])

	const repoCards = repos.map((repo) => <RepoCard key={repo.key} repo={repo}/>)
	
	return (
		<div className='repos-container'>
			<h2>I'm the Repos Container</h2>
			{repoCards}
		</div>
	)
}


export default Repos;