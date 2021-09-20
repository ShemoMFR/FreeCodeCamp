import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FireApp from './Firebase';
import './App.scss';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => authListener(), []);

	const authListener = () => {
		FireApp.auth().onAuthStateChanged((user) => {
			if (user) setUser(user);
			else setUser(null);
		});
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path='/'
					render={() => (user ? <Welcome user={user} /> : <Home />)}
				/>

				<Route
					exact
					path='/welcome'
					render={() => (user ? <Welcome user={user} /> : <Home />)}
				/>
				
				<Route component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;