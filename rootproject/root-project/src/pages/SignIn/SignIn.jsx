import './SignIn.scss';
import React, { useState } from 'react';
//Librairies
import FireApp from '../../Firebase';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import {withRouter} from 'react-router-dom';

function SignIn(props) {
	//Handle Input Password
	const [inputMail, setInputMail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [error, setError] = useState('');
	const [toggleEye, setToggleEye] = useState(false);
	const eyeIcon = toggleEye ? (
		<FaRegEyeSlash onClick={() => setToggleEye(false)} className='eye' />
	) : (
		<FaRegEye onClick={() => setToggleEye(true)} className='eye' />
	);
	const inputType = toggleEye ? 'text' : 'password';
	//--



	function handleSubmit(e) {
		e.preventDefault();

		FireApp
			.auth()
			.signInWithEmailAndPassword(inputMail, inputPassword)
			.then(() => {
				props.history.push('/welcome');
			})
			.catch((error) => console.error(error));
	}

	return (
		<div className='SignIn'>
			<div className='title'>Connexion</div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setInputMail(e.target.value)}
					type='email'
					placeholder='Adresse e-mail'
					autoComplete="username"
					id="username"
					required
				/>
				<div className='password'>
					<input
						onChange={(e) => setInputPassword(e.target.value)}
						type={inputType}
						placeholder='Mot de passe'
						autoComplete="current-password"
						id="current-password"
						required
					/>
					{eyeIcon}
				</div>
				<div className='forgetLink'>Mot de passe oublié?</div>
				<button type='submit'>Se Connecter</button>
				<div className='ou'>OU</div>
			</form>
			{/* button google */}
			<button className='btn-connect'>
				<FcGoogle className='icons' />
				Se Connecter avec Google
			</button>
			{/* button Github */}
			<button className='btn-connect dark'>
				<AiFillGithub className='icons' />
				Se Connecter avec Github
			</button>
			<button onClick={props.openModalSignUp} className='signUpButton'>
				Créer un compte
			</button>
		</div>
	);
}

export default withRouter(SignIn);