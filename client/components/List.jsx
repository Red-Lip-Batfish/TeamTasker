import React, { useState } from 'react';
// import Task from './Task.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteList } from '../slice.js';
import { thunks } from '../slice.js';
import axios from 'axios';

const List = ({ title, tasks, _id }) => {
	// assign the evaluated result of useDispatch to a constant, dispatch
	const dispatch = useDispatch();
	const [newTask, newTaskName] = useState('');
	// capture the array of lists from store in a constant called stateLists --> THIS DOESN'T WORK
	const stateLists = useSelector((state) => state.lists.lists);
	let arrOfTasks = tasks
		? tasks.map((task) => {
				return (
					<div>
						{task}
						<br />
					</div>
				);
		  })
		: [];
	// populate an array of tasks with the tasks in the current list's tasks array (from props)
	// const arrOfTasks = [];
	// console.log('list props: ', props);
	// console.log('stateLists in list component: ', stateLists);
	// for (let i = 0; i < props.tasks.length; i++) {
	// 	const currentTask = props.tasks[i];
	// 	arrOfTasks.push(
	// 		<Task
	// 			title={currentTask.title}
	// 			description={currentTask.description}
	// 			assignment={currentTask.assignment}
	// 			currentList={currentTask.currentList}
	// 		/>
	// 	);
	// }

	// define the addTask functionality that will trigger on button click
	// const addTask = () => {
	// 	let listIndex;
	// 	for (let i = 0; i < stateLists.length; i++) {
	// 		if (stateLists[i]._id === props._id) listIndex = i;
	// 	}
	// 	dispatch(addTask(listIndex));
	// };

	// define the deleteList functionality that will trigger on button click
	const deleteLists = (id) => {
		console.log('stateLists', stateLists);
		const updatedList = stateLists.filter((list) => {
			console.log('list._id', list._id);
			console.log('props._id', id);
			return list._id !== id;
		});
		console.log('updatedList', updatedList);

		dispatch(deleteList(updatedList));

		console.log('running after dispatch');
		axios.post('/deleteList', {
			_id: id,
		});
	};
	const addNewTask = (propsObj) => {
		console.log('trying to add new task with ', propsObj);
		dispatch(addTask(propsObj));
		axios.post('/addTask', propsObj);
	};

	// render the array of tasks and buttons
	return (
		<div className='list'>
			<div>
				Title:{title}
				<input id='listTitle' defaultValue={title}></input>
			</div>
			<div>
				Tasks:
				{arrOfTasks}
			</div>
			<input
				id='addNewTask'
				onChange={(e) => newTaskName(e.target.value)}
			></input>
			<button onClick={() => addNewTask({ newTask: newTask, _id: _id })}>
				Add Task
			</button>
			<div>
				ID:
				{_id}
			</div>
			<button onClick={() => deleteLists(_id)}>Delete List</button>
		</div>
	);
};

export default List;
