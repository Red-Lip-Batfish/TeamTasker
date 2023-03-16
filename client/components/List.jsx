import React, { useState, useEffect } from 'react';
import Task from './Task.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteList } from '../slice.js';
import { thunks } from '../slice.js';
import axios from 'axios';

const List = ({ title, tasks, _id }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [submit, setSubmit] = useState(false); // Add submit state
  const stateLists = useSelector((state) => state.lists.lists);
  const username = useSelector((state) => state.lists.username)

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const saveTitle = async (e) => {
    e.preventDefault();
    setSubmit(true); // Update submit state to true
	console.log(username)
	console.log({tasks})
	console.log(title)
	// dispatch(thunks.saveMadeListThunk())
	const data = await axios.post('/saveUserList', {title: task, tasks: tasks, _id: _id, username: username})
		.then((res) => {
			if(res.status === 200) {
				console.log(res)
			}
		})
  
};

//   useEffect(() => {
//     // Re-render the component when submit changes
//     // Perform any actions that need to be performed when submit is true here
//     if (submit) {
//       console.log('Submit is true!');
//       // Perform any actions that need to be performed when submit is true
//     }
//   }, [submit]);

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
	const submitList = (id) => {
		const updatedList = stateLists.filter((list) => {
			return list._id !== id});
			console.log('updatedList',updatedList)
	}
	// define the deleteList functionality that will trigger on button click
	const deleteLists = (id) => {
		console.log('stateLists',stateLists)
		const updatedList = stateLists.filter((list) => {
			console.log('list._id',list._id)
			console.log('props._id', id)
			return list._id !== id});
			console.log('updatedList',updatedList)
		
		dispatch(deleteList(updatedList));

		console.log('running after dispatch')
		axios.post('/deleteList',{
			_id: id
		})

	};
	

	// render the array of tasks and buttons
	return (
		<div className='list'>
			{submit === true ? 
			<div>
				<h2>{task}</h2>
			</div> : 	
			<div>
				Title:{title}
				<form onSubmit={saveTitle}>
					<input type="text" onChange={onChange}></input>
					<input type="submit"></input>
				</form>
			</div>}
		
			<div>
				Tasks:
				{tasks}
			</div>
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