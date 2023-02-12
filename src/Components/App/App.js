import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Repos from '../Repos/Repos'
import Commits from '../Commits/Commits'
import './App.css';

const App = () => {

  return (
		<div className="App">
			<header>Welcome to RepoHub 😎</header>
			<Route exact path="/">
				<Repos />
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
