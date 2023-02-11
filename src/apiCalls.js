async function fetchRepos() {
  const response = await fetch('https://api.github.com/orgs/Netflix/repos');
	const repos = await response.json();
	return repos;
}

export default fetchRepos;