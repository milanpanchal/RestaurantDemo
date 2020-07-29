import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	return (
		<View style={styles.backgroundStyle}>
			<SearchBar 
				term={term} 
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
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