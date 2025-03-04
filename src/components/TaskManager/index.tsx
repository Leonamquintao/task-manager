import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

const TaskManager = ({
	newTask,
	setNewTask,
	handleAddTask,
}: {
	newTask: string;
	setNewTask: (text: string) => void;
	handleAddTask: () => void;
}) => {
	return (
		<View style={styles.addTaskSection}>
			<Text style={styles.addTaskHeader}>Add New Task</Text>
			<Text style={styles.label}>
				Name<Text style={styles.required}>*</Text>
			</Text>
			<TextInput
				style={styles.input}
				placeholder="New name"
				value={newTask}
				onChangeText={setNewTask}
			/>
			<TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
				<Text style={styles.addButtonText}>Add</Text>
			</TouchableOpacity>
		</View>
	);
};

export default TaskManager;

const styles = StyleSheet.create({
	addTaskSection: {
		backgroundColor: '#e6f2ff',
		padding: 16,
		marginTop: 20,
	},
	addTaskHeader: {
		fontSize: 18,
		color: '#4494F1',
		marginBottom: 16,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
	},
	required: {
		color: 'red',
	},
	input: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 12,
		marginBottom: 16,
	},
	addButton: {
		backgroundColor: '#4494F1',
		borderRadius: 25,
		padding: 16,
		alignItems: 'center',
	},
	addButtonText: {
		color: '#fff',
		fontSize: 16,
	},
});
