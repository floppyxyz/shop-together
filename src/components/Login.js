import React from 'react';
import firebase from 'firebase';
import firebaseApp from '../firebaseApp';

class Login extends React.Component {

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
						<button className="loginBtn loginBtn--facebook" onClick={this.authenticate.bind()}>
							Login with Facebook
						</button>
					</li>
				</ul>
			</div>
		)
	};
}

export default Login;