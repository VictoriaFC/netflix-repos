export const fetchRepos = async (org) => {
  const response = await fetch(`https://api.github.com/orgs/${org}/repos`);
	const repos = await response.json();
	return repos;
}

export const fetchCommits = async (org, repoName) => {
	const response = await fetch(`https://api.github.com/repos/${org}/${repoName}/commits`)
	const commits = await response.json();
	return commits;
}

