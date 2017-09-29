import React from 'react';
import base from '../base';
import auth from 'firebase/auth';
import firebase from 'firebase';
import firebaseApp from '../firebaseApp';

class Login extends React.Component {

	constructor(){
		super();
		console.log('constructor');
	}

	authenticate = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebaseApp.auth().signInWithPopup(provider).then((authData) => {
			this.props.handleLogin(authData);
		});
	};

	render() {
		return(
			<div className={'login'}>
				<h1>ShopTogether</h1>
				<ul className="loginButtons">
					<li>
						<button className="loginBtn loginBtn--facebook" onClick={this.authenticate}>
							Login with Facebook
						</button>
					</li>
				</ul>
			</div>
		)
	};
}

export default Login;