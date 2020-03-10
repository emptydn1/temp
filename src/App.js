import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Taskboard from './containers/Taskboard';
import GlobalLoading from './components/GlobalLoading';

const App = () => {
	return (
		<div className="App">
			<GlobalLoading />
			<ToastContainer />
			<Taskboard />
		</div>
	);
};

export default App;
