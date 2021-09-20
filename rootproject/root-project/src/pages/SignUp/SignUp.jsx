import React, { useState, useEffect, useRef } from 'react';
import FireApp from '../../Firebase';
import './SignUp.scss';
import { RiCloseCircleFill } from 'react-icons/ri';

function SignUp({ closeModalSignUp }) {
	const [error, setError] = useState('');
	const [infos, setInfos] = useState({
		email: '',
		mdp: '',
		confirmMdp: '',
		prenom: '',
		nom: '',
		pseudo: '',
	});

	const divSignUpPage = useRef();
	//divSignUpPage.current.firstChild = div SignUp
	useEffect(() => {
		divSignUpPage.current.classList.add('darken');
		divSignUpPage.current.firstChild.classList.add('scale1');
	}, []);

	function HandleCloseModalSignUp(e) {
		if (e.target === divSignUpPage.current || e.target.id === 'closeIcon') {
			divSignUpPage.current.classList.remove('darken');
			divSignUpPage.current.firstChild.classList.remove('scale1');
			setTimeout(() => closeModalSignUp(), 400);
		}
	}

	function handleChange(e) {
		setInfos({ ...infos, [e.target.id]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const { email, mdp, pseudo } = infos;
		FireApp.auth()
			.createUserWithEmailAndPassword(email, mdp)
			/* .then(authUser => {
            return FireApp.user(authUser.user.uid).set({
                pseudo: pseudo,
                email: email
            })
        }) */
			.then(() => {
				setInfos({ ...infos });
				console.log('user created');
			})
			.catch((error) => {
				setError(error);
				//setInfos({ ...infos });
				console.error(error);
			});

		console.log(error);
	}

	return (
		<div className='SignUpPage' onClick={HandleCloseModalSignUp} ref={divSignUpPage}>
			<div className='SignUp'>
				<RiCloseCircleFill id='closeIcon' onClick={HandleCloseModalSignUp} />
				<h1 className='title'>BIENVENUE PARMI NOUS</h1>
				<form onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						id='email'
						type='email'
						placeholder='Adresse e-mail'
						autoComplete='username'
						required
					/>
					<input
						onChange={handleChange}
						id='nom'
						placeholder='Nom'
						type='text'
						required
					/>
					<input
						onChange={handleChange}
						id='prenom'
						placeholder='Prénom'
						type='text'
						required
					/>
					<input
						onChange={handleChange}
						id='pseudo'
						placeholder='Pseudo'
						type='text'
						minLength='3'
						autoComplete='off'
						required
					/>
					<input
						onChange={handleChange}
						id='mdp'
						placeholder='Mot de passe'
						type='password'
						minLength='6'
						autoComplete='new-password'
						required
					/>
					<input
						onChange={handleChange}
						placeholder='Confirmer le mot de passe'
						type='password'
						minLength='6'
						autoComplete='new-password'
						required
					/>
					<button type='submit' className='btnInscription'>
						Suivant
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;