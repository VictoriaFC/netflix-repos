export const fetchRepos = async (org, setError) => {
	try {
		const response = await fetch(`https://api.github.com/orgs/${org}/repos`);
		const repos = await response.json();
		console.log(response)
		
		if(!response.ok) {
			throw Error('No organization under that name exists')
		} if(repos.length <= 0) {
			throw Error('No repositories found')
		} else {
			return repos;
		}
	} catch (error) {
		console.log(`ERROR: ${error}`)
		setError(error.message) 
	}
}

export const fetchCommits = async (org, repoName, setError) => {
	try {
		const response = await fetch(`https://api.github.com/repos/${org}/${repoName}/commits`)
		const commits = await response.json();
		console.log(response);

		if(!response.ok) {
			throw Error('no commits found')
		} if(commits.length <= 0) {
			throw Error('no commits found')
		} else {
			console.log('There were no errors')
			return commits;
		}
		
	} catch (error){
		console.log(`ERROR: ${error}`)
		setError(error.message)
	}
}