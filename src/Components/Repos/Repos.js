import React, { useState, useEffect } from 'react'
import RepoCard from '../RepoCard/RepoCard'
import { fetchRepos } from '../../apiCalls'
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
				dateCreated: new Date(Date.parse(repoData.created_at)),
				commitsUrl: repoData.commits_url,
				key: index
			}
		})
		setRepos(sortReposByStarCount(refinedReposData));
	}

	useEffect(() => {
		getRepos();
	}, [])

	const sortReposByStarCount = (repos) => {
		const sortedRepos = repos.sort((a, b) => {
			return b.starCount - a.starCount
		})
		
		return sortedRepos;
	}

	const repoCards = repos.map((repo) => <RepoCard key={repo.key} repo={repo}/>)
	
	return (
		<div className='repos-container'>
			{repoCards}
		</div>
	)
}


export default Repos;