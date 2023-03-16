import React, { useState, useEffect } from 'react';
// import Task from './Task.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { updateLists, deleteList } from '../slice.js';
import { thunks } from '../slice.js';
import axios from 'axios';

const List = ({ title, tasks, _id }) => {
	const dispatch = useDispatch();
	const [task, setTask] = useState('');
	const [submit, setSubmit] = useState(false); // Add submit state
	const stateLists = useSelector((state) => state.lists.lists);
	const username = useSelector((state) => state.lists.username);
	const onChange = (e) => {
		setTask(e.target.value);
	};

	const saveTitle = (e) => {
		e.preventDefault();
		setSubmit(true); // Update submit state to true
	};

	useEffect(() => {
		// Re-render the component when submit changes
		// Perform any actions that need to be performed when submit is true here
		if (submit) {
			console.log('Submit is true!');
			// Perform any actions that need to be performed when submit is true
		}
	}, [submit]);

	const submitList = (id) => {
		const updatedList = stateLists.filter((list) => {
			return list._id !== id;
		});
		console.log('updatedList', updatedList);
	};
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
		const { _id, task } = propsObj;
		console.log('trying to add new task:', task, 'on list _id:', _id);
		const cloneOfLists = structuredClone(stateLists);
		cloneOfLists.forEach((list) => {
			if (list._id == _id) {
				console.log('list found:', list);
				list.taskArr.push(task);
			}
		});
		dispatch(updateLists(cloneOfLists));
		// axios.post('/addTask', propsObj);
	};

	useEffect(() => {
		// Re-render the component when submit changes
		// Perform any actions that need to be performed when submit is true here
		if (submit) {
			console.log('Submit is true!');
			// Perform any actions that need to be performed when submit is true
		}
	}, [submit]);

	// render the array of tasks and buttons
	return (
		<div className='list'>
			<div>
				Title:{title}
				<form onSubmit={saveTitle}>
					<input type='text' onChange={onChange}></input>
					<input type='submit'></input>
				</form>
			</div>
			<div>
				Tasks:
				{/* {arrOfTasks} */}
			</div>
			<input id='addNewTask' onChange={(e) => setTask(e.target.value)}></input>
			<button
				onClick={() => addNewTask({ task: task, _id: _id, username: username })}
			>
				Add Task
			</button>
			<div>
				ID:
				{_id}
			</div>
			<button onClick={() => deleteLists(_id)}>Delete List</button>

			{/* <div className='buttonRow'>
				<button onClick={() => dispatch(thunks.addTaskThunk(props._id))}>
					Add Task
				</button>
				<button onClick={deleteLists}>Delete List</button>
				<button
					onClick={() =>
						dispatch(
							thunks.saveListThunk({
								title: props.title,
								_id: props._id,
								tasks: props.tasks,
							})
						)
					}
				>
					Save List
				</button>
			</div> */}
		</div>
	);
};

export default List;
