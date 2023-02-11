import React from 'react'
import { Route } from 'react-router-dom'
import Repos from '../Repos/Repos'
import './App.css';

const App = () => {

  return (
    <div className="App">
			<header>Welcome to RepoHub 😎</header>
			<Route>
				<Repos />
			</Route>
    </div>
  );
}

export default App;
