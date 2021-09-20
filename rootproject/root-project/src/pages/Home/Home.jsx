import React, { useState } from 'react';
import Logo from '../HomeLogo/HomeLogo';
import SignIn from '../SignIn/SignIn';
import './Home.scss';
import SignUp from './../SignUp/SignUp';

function Home() {
	const [modalSignUp, setModalSignUp] = useState(false);
	const openModalSignUp = () => setModalSignUp(true);
	const closeModalSignUp = () => setModalSignUp(false);

	return (
		<div className='Home'>
			<Logo />
			<SignIn openModalSignUp={openModalSignUp} />
			{modalSignUp && <SignUp closeModalSignUp={closeModalSignUp} />}
		</div>
	);
}

export default Home;