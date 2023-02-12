import React from 'react'
import './Search.css'

const Search = ({ searchInput, setSearchInput }) => {

	return(
		<div>
			<form>
				<input 
					type='search'
					placeholder="Search Organization (i.e. Netflix)"
				/>
				<input 
					type="submit" value="Submit"
				/>
			</form>
		</div>
	)
}

export default Search;