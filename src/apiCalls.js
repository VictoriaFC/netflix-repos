export const fetchRepos = async () => {
  const response = await fetch('https://api.github.com/orgs/Netflix/repos');
	const repos = await response.json();
	return repos;
}

export const fetchCommits = async (repoName) => {
	const response = await fetch(`https://api.github.com/repos/Netflix/${repoName}/commits`)
	const commits = await response.json();
	return commits;
}

