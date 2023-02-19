import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { fetchRepos } from '../../apiCalls'
import Repos from '../Repos/Repos'
import Commits from '../Commits/Commits'
import Search from '../Search/Search'
import Organization from '../Organization/Organization'
import Header from '../Header/Header'
import Error from '../Error/Error'
import './App.css';

const App = () => {
	const [repos, setRepos] = useState([]);
	const [org, setOrg] = useState({orgName: null, logo: null });
	const [error, setError] = useState(null);

	const handleOrgChange = async (orgName) => {
		setError(null)
		const reposData = await fetchRepos(orgName, setError);
		if(!reposData) {
			return
		}
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
				<div className='header-wrapper'>
					<Header />
				</div>
				<div className='search-wrapper'>
					<Search handleOrgChange={handleOrgChange}/>
				</div>
					{error ? <Error /> :
						<div className='body-container-wrapper'>
							<div className='body-container'> 
								<div className='section-left'>
									{!!org.logo && <Organization org={org}/>}
									</div>
								<div className='section-right'>
									<Repos orgName={org.orgName} repos={repos}/>
								</div>
							</div>
						</div>
					}
			</Route>

			<Route exact path="/:orgName/Commits/:repoName"
				render={({ match }) => {
					const { orgName, repoName } = match.params;
					return <div className='commits-page-container'>
							<Header />
						<div className='commits-container-wrapper'>
							<Commits orgName={orgName} repoName={repoName}/>
						</div>
					</div>
				}}
			/>

    </div>
  );
}

export default App;
