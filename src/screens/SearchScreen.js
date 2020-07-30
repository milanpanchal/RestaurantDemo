import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';


const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	// console.log(results)
	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$' || '$$$$'

		return results.filter(result => {
			return result.price === price;
		});
	};

	return (
		<View style={styles.backgroundStyle}>
			<SearchBar 
				term={term} 
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultList headerTitle="Cost Effective" results={filterResultsByPrice('$')} />
				<ResultList headerTitle="Bit Pricer" results={filterResultsByPrice('$$')} />
				<ResultList headerTitle="Big Spender" results={filterResultsByPrice('$$$')} />
				<ResultList headerTitle="Most Expensive" results={filterResultsByPrice('$$$$$')} />
			</ScrollView>
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