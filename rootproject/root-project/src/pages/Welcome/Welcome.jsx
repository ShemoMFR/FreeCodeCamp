import React from 'react';
import './Welcome.scss';
import FireApp from '../../Firebase';
import { withRouter } from 'react-router-dom';

function Welcome(props) {
	console.log(props);

    const logOut = () => {
		FireApp.auth().signOut();
        props.history.push('/home');
	};

	return (
		<div className='Welcome'>
			<button onClick={logOut}>Deconnexion</button>
			<h1>WELCOME {props.user.email}</h1>
		</div>
	);
}

export default withRouter(Welcome);