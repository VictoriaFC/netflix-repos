import React from 'react'
import './Error.css'

const Error = () => {
	return (
			<div className='error-container'>
				<h2 className='error-msg'>No Results Found</h2>
				<p>We couldn't find what you searched for.</p>
				<p>Try searching again.</p>
			</div>
	)
}

export default Error;