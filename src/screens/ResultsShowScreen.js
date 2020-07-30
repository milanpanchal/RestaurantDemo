import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id');

	const [result, setResult] = useState(null);

	const getResultApi = async id => {
		console.log('getResultApi called')
		try {
			const response = await yelp.get(`/${id}`);
			setResult(response.data);
		} catch (err) {
			console.log('Somthing went wrong');
			console.log(err);
		}
	};

	useEffect(() => {
		getResultApi(id);
	}, []);

	if (!result) {
		return null
	}

	return (
		<>
			<Text style={styles.textStyle}>Name: {result.name} </Text>
			<FlatList 
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.imageStyle} source={{ uri: item }} />
				}}
			/> 
		</>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		width: 250,
		height: 120,
		borderRadius: 4,
		marginLeft: 10,
		marginBottom: 5

	},
	textStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		margin: 10,
	}
});

export default ResultsShowScreen;