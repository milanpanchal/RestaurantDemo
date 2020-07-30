import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async searchTerm => {
		console.log('searchApi called')
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Somthing went wrong');
		}
	};

	useEffect(() => {
		searchApi('pasta');
	}, []);

    return [searchApi, results, errorMessage];
}