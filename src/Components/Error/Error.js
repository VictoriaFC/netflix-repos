import React from 'react'
import './Error.css'
import errorImage from '../../assets/Hmmm.png'

const Error = () => {
	return (
			<div className='error-container'>
				<img src={errorImage} className='error-image'></img>
				<h2 className='error-msg'>No Results Found</h2>
				<p>We couldn't find what you searched for.</p>
				<p>Try searching again.</p>
			</div>
	)
}

export default Error;