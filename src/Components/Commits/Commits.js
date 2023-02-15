import React, { useState, useEffect } from 'react'
import { fetchCommits } from '../../apiCalls'
import CommitCard from '../CommitCard/CommitCard'
import Error from '../Error/Error'
import { Link } from 'react-router-dom'
import './Commits.css'

const Commits = ({ orgName, repoName }) => {
	const [commits, setCommits] = useState([])
	const [error, setError] = useState(null);

	const handlePageLoad = async (orgName, repoName) => {
		const repoCommits = await fetchCommits(orgName, repoName, setError);
		if(!repoCommits) {
			return
		}
		const refinedRepoCommits = repoCommits.map((repoCommitData, index) => {
			return {
				commitTitle: repoCommitData.commit.message,
				committerUsername: repoCommitData.author?.login || repoCommitData.commit.author?.email,
				committerAvatar: repoCommitData.author?.avatar_url,
				commitHash: repoCommitData.sha, 
				commitUrl: repoCommitData.html_url,
				commitDateCreated: new Date(Date.parse(repoCommitData.commit.author.date)),
				key: index
			}
		})
		setCommits(refinedRepoCommits)
	}

	useEffect(() => {
		handlePageLoad(orgName, repoName);
	}, [])

	const commitCards = commits.map((commit, index) => <CommitCard key={index} commit={commit}/>)

	return (
		<div className='commits-container'>
			<div className='go-back-link-container'>
				<Link to='/' className='go-back-link'>Go Back</Link>
			</div>
			{error ? <Error /> : commitCards}
		</div>
	)
}

export default Commits; 
