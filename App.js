import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
	return (
		<>
			<LoginScreen />
			<View style={styles.container}>
				<Text>Vigneshwaran</Text>
				<StatusBar style="auto" />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
