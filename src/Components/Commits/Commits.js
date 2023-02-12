import React, { useState, useEffect } from 'react'
import { fetchCommits } from '../../apiCalls'
import CommitCard from '../CommitCard/CommitCard'
import './Commits.css'

const Commits = ({ orgName, repoName }) => {
	const [commits, setCommits] = useState([])

	const getCommits = async (orgName, repoName) => {
		const repoCommits = await fetchCommits(orgName, repoName);
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
		getCommits(orgName, repoName);
	}, [])

	const commitCards = commits.map((commit, index) => <CommitCard key={index} commit={commit}/>)

	return (
		<div>
			{commitCards}
		</div>
	)
}

export default Commits; 
