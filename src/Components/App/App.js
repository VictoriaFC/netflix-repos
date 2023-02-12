import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { fetchRepos } from '../../apiCalls'
import Repos from '../Repos/Repos'
import Commits from '../Commits/Commits'
import Search from '../Search/Search'
import Organization from '../Organization/Organization'
import Header from '../Header/Header'
import './App.css';

const App = () => {
	const [repos, setRepos] = useState([]);
	const [org, setOrg] = useState({orgName: null, logo: null });

	const handleOrgChange = async (orgName) => {
		const reposData = await fetchRepos(orgName);
		const firstRepo = reposData[0]
		const refinedReposData = reposData.map((repoData, index) => {
			return {
				name: repoData.name,
				language: repoData.language, 
				description: repoData.description,
				starCount: repoData.stargazers_count,
				forkCount: repoData.forks_count,
				dateCreated: new Date(Date.parse(repoData.created_at)),
				key: index
			}
		})
		setOrg({
			orgName: orgName,
			logo: firstRepo?.owner?.avatar_url
		})
		setRepos(sortReposByStarCount(refinedReposData));
	}

	const sortReposByStarCount = (repos) => {
		const sortedRepos = repos.sort((a, b) => {
			return b.starCount - a.starCount
		})
		
		return sortedRepos;
	}

	useEffect(() => {
		org.orgName || handleOrgChange("Netflix")
	}, [])

  return (
		<div className="App">
			<Route exact path="/">
				<div className='section-one'>
					<Header />
				</div>
				<div className='section-two'>
					<div className='section-left'>
						<Organization org={org}/>
					</div>
					<div className='section-right'>
						<Search handleOrgChange={handleOrgChange}/>
						<Repos orgName={org.orgName} repos={repos}/>
					</div>
				</div>
			</Route>

			<Route exact path="/:orgName/Commits/:repoName"
				render={({ match }) => {
					const { orgName, repoName } = match.params;
					return <Commits orgName={orgName} repoName={repoName}/>
				}}
			/>
    </div>
  );
}

export default App;
