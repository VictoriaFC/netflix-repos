import React, { useEffect, useState } from 'react'
import './Search.css'

const Search = ({ handleOrgChange }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const input = form.firstChild;

		handleOrgChange(input.value)
	}

	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input 
					type='search'
					placeholder="Search Organization (i.e. Netflix)"
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}

export default Search;