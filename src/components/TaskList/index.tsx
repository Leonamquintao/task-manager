import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({
	tasks,
	checkedTasks,
	handleToggleTask,
	handleRemoveTask,
}: {
	tasks: string[];
	checkedTasks: { [key: number]: Date };
	handleToggleTask: (index: number) => void;
	handleRemoveTask: (index: number) => void;
}) => {
	return (
		<View style={styles.taskList}>
			{tasks.length === 0 && (
				<Text style={styles.noTasksText}>No tasks yet</Text>
			)}
			{tasks.map((task, index) => (
				<View key={String(index)} style={styles.taskItem}>
					<TouchableOpacity
						onPress={() => handleToggleTask(index)}
						style={[styles.checkbox, checkedTasks[index] && styles.checkedBox]}
					/>
					<Text style={styles.taskText}>{task}</Text>
					<TouchableOpacity onPress={() => handleRemoveTask(index)}>
						<Text style={styles.removeText}>Remove item</Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
};

export default TaskList;

const styles = StyleSheet.create({
	taskList: {
		padding: 16,
	},
	noTasksText: {
		textAlign: 'center',
		color: '#666',
	},
	taskItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#E5E5E5',
	},
	checkbox: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#000',
		marginRight: 10,
	},
	checkedBox: {
		backgroundColor: '#4494F1',
		borderColor: '#4494F1',
	},
	taskText: {
		flex: 1,
		fontSize: 16,
	},
	removeText: {
		color: '#4494F1',
	},
});
