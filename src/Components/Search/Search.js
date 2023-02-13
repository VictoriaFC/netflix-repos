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
		<div className='search-container'>
			<form onSubmit={handleSubmit}>
				<input
					className='search-bar' 
					type='search'
					placeholder="Find an organization..."
				/>
				<input className='search-button' type="submit" value="Search" />
			</form>
		</div>
	)
}

export default Search;