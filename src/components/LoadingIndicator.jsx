import React from 'react';
import './LoadingIndicator.css';

function LoadingIndicator() {
	return (
		<div className='loading'>
			<div className='loading-ball loading-purple'></div>
			<div className='loading-ball loading-orange'></div>
			<div className='loading-ball loading-green'></div>
			<div className='loading-ball loading-red'></div>
		</div>
	);
}

export { LoadingIndicator };
