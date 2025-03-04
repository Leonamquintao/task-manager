import { StyleSheet, Text, View } from 'react-native';

const FooterNav = ({ tasks }: { tasks: string[] }) => {
	return (
		<View style={styles.bottomNav}>
			{tasks.map((item, index) => (
				<View key={String(index)} style={styles.navItem}>
					<View style={styles.navIcon}>
						<Text>+</Text>
					</View>
					<Text style={styles.navText}
						ellipsizeMode="tail"
						numberOfLines={1}>
							{item}
					</Text>
				</View>
			))}
		</View>
	);
};

export default FooterNav;

const styles = StyleSheet.create({
	bottomNav: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 16,
		margin: 16,
	},
	navItem: {
		alignItems: 'center',
	},
	navIcon: {
		width: 24,
		height: 24,
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 4,
	},
	navText: {
		fontSize: 12,
		color: '#666',
		width: 50,
		marginHorizontal: 4,
	},
});
