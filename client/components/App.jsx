import React, { useEffect } from 'react';
import Toolbar from './Toolbar.jsx';
import ListGenerator from './ListGenerator.jsx';
// import store from '../store.js';
// import { findInitialState } from '../slice.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLists } from '../slice.js';
const App = (props) => {
	return (
		<div>
			<Toolbar />
			<ListGenerator />
		</div>
	);
};

export default App;
