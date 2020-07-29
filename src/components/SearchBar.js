import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput 
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle} 
				placeholder="Search" 
				value={term}
				onChangeText={newTerm => onTermChange(newTerm)}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 8,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	inputStyle: {
		flex: 1,
		fontSize: 18 // Default 15
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}

});

export default SearchBar;