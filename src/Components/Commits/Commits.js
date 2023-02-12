import React, { useState, useEffect } from 'react'
import { fetchCommits } from '../../apiCalls'
import CommitCard from '../CommitCard/CommitCard'
import './Commits.css'

const Commits = ({ repoName }) => {
	const [commits, setCommits] = useState([])

	const getCommits = async (repoName) => {
		const repoCommits = await fetchCommits(repoName);
		console.log('repo commits: ', repoCommits)
		const refinedRepoCommits = repoCommits.map((repoCommitData, index) => {
			return {
				commitTitle: repoCommitData.commit.message,
				committerUsername: repoCommitData.author?.login || repoCommitData.commit.author?.email,
				commitHash: repoCommitData.sha, 
				commitUrl: repoCommitData.html_url,
				commitDateCreated: new Date(Date.parse(repoCommitData.commit.author.date)),
				key: index
			}
		})
		setCommits(refinedRepoCommits)
	}

	useEffect(() => {
		getCommits(repoName);
	}, [])

	const commitCards = commits.map((commit, index) => <CommitCard key={index} commit={commit}/>)

	return (
		<div>
			{commitCards}
		</div>
	)
}

export default Commits; 
