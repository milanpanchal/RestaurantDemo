import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({ headerTitle, results, navigation }) => {

	if (!results.length) {
		return null;
	}

	return (
		<View style={styles.containerStyle}>
			<Text style={styles.textStyle}>{headerTitle}({results.length})</Text>
			<FlatList 
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={result => result.id}
				renderItem = {({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
							<ResultDetail result={item} />
						</TouchableOpacity>
					)
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

export default withNavigation(ResultList);