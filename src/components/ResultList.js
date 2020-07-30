import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultList = ({ headerTitle, results }) => {

	return (
		<View style={styles.containerStyle}>
			<Text style={styles.textStyle}>{headerTitle}({results.length})</Text>
			<FlatList 
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={result => result.id}
				renderItem = {({ item }) => {
					return <ResultDetail result={item} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5
	},
	containerStyle: {
		marginBottom : 10
	}
});

export default ResultList;