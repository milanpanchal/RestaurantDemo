import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		const response = await yelp.get('/search', {
			params: {
				limit: 50,
				term: term,
				location: 'san jose'
			}
		});
		setResults(response.data.businesses);
	};

	return (
		<View style={styles.backgroundStyle}>
			<SearchBar 
				term={term} 
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi()}
			/>
			<Text>{term}</Text>
			<Text>We have found {results.length} results</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#FFF',
		flex: 1
	}
});

export default SearchScreen;