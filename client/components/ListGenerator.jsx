import React from 'react';
import List from './List.jsx';
import { useSelector } from 'react-redux';
import StoredList from './storedList.jsx';
const ListGenerator = (props) => {
	// declare a constant lists assign it to state.reducer.lists using useSelector
	let lists = useSelector((state) => state.lists.lists);
	// declare a constant arrOfLists and populate it with the lists in state.reducer.lists
	let arrOfLists = lists.map((list) => {
		// console.log(list)
		console.log(list.isSubmitted)
		if (list.isSubmitted) {
			return <StoredList title={list.title} task={list.taskArr} _id={list._id}/>;
		  } else {
			return <List title={list.title} tasks={list.taskArr} _id={list._id} submit={list.submit} />;
		  }
		
	});

	// render the array of lists
	return <div className='listContainer'>
		{arrOfLists}
		</div>;
};

export default ListGenerator;
