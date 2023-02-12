import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Repos from '../Repos/Repos'
import Commits from '../Commits/Commits'
import Search from '../Search/Search'
import './App.css';

const App = () => {
	const [repos, setRepos] = useState([]);
	const [searchInput, setSearchInput] = useState('')

  return (
		<div className="App">
			<h1>Welcome to RepoHub 😎</h1>
			<h3>A site where you can find an organizations Github repositories!</h3>
			<Route exact path="/">
				<Search searchInput={searchInput} setSearchInput={setSearchInput}/>
				<Repos repos={repos} setRepos={setRepos} />
			</Route>

			<Route exact path="/Commits/:id"
				render={({ match }) => {
					return <Commits repoName={match.params.id}/>
				}}
			/>
    </div>
  );
}

export default App;
