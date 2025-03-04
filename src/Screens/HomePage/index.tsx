import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import Header from '../../components/Header';
import TaskList from '../../components/TaskList';
import { useState } from 'react';
import TaskManager from '../../components/TaskManager';
import FooterNav from '../../components/FooterNav';

export type Task = {
	title: string;
	completed: boolean;
	createdAt: Date;
};

const HomePage = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState<string>('');
	const [checkedTasks, setCheckedTasks] = useState<{ [key: number]: Date }>({});

	const handleAddTask = () => {
		if (newTask.trim()) {
			setTasks([...tasks, { title: newTask, completed: false, createdAt: new Date() }]);
			setNewTask('');
		}
	};

	const handleToggleTask = (index: number) => {
		setCheckedTasks((prev) => {
			const newChecked = { ...prev };
			if (newChecked[index]) {
				delete newChecked[index];
			} else {
				newChecked[index] = new Date();
			}
			return newChecked;
		});
	};

	const handleRemoveTask = (index: number) => {
		setCheckedTasks((prev) => {
			const newChecked = { ...prev };
			delete newChecked[index];
			return newChecked;
		});
		setTasks(tasks.filter((_, i) => i !== index));
	};

	const mapper = tasks.map((task) => task.title);

	return (
		<View style={styles.container}>
			<ScrollView>
				{/* Header */}
				<Header checkedTasks={checkedTasks} />

				{/* Task List */}
				<TaskList
					tasks={mapper}
					checkedTasks={checkedTasks}
					handleToggleTask={handleToggleTask}
					handleRemoveTask={handleRemoveTask}
				/>
			</ScrollView>

			{/* Add New Task Section */}
			<View>
				<TaskManager
					newTask={newTask}
					setNewTask={setNewTask}
					handleAddTask={handleAddTask}
				/>
			</View>

			{/* Bottom Navigation */}
			<View style={styles.navSection}>
				<ScrollView horizontal>
					<FooterNav tasks={mapper} />
				</ScrollView>
			</View>
		</View>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	navSection: {
		borderTopWidth: 1,
		borderTopColor: '#E5E5E5',
	},
});
