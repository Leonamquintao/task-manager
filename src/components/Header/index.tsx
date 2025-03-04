import { StyleSheet, Text, View } from 'react-native';

const Header = ({
	checkedTasks,
}: { checkedTasks: { [key: number]: Date } }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>Your Task</Text>
			{Object.entries(checkedTasks).map(([index, date]) => (
				<Text key={index} style={styles.dateText}>
					Task {Number(index) + 1}: {date.toLocaleString()}
				</Text>
			))}
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		margin: 16,
		backgroundColor: '#e6f2ff',
		padding: 16,
	},
	headerText: {
		fontSize: 18,
		color: '#4494F1',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	dateText: {
		fontSize: 12,
		color: '#4494F1',
		textAlign: 'center',
		marginTop: 4,
	},
});
