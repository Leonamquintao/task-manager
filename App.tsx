import type React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';

import HomePage from './src/Screens/HomePage';

function App() {
	return (
		<SafeAreaView style={styles.container}>
			<HomePage />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default App;
