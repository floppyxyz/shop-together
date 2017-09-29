import React from 'react';
import PropTypes from 'prop-types';
import firebaseApp from '../firebaseApp';

class AuthenticatedLayout extends React.Component {
	componentWillMount() {
		firebaseApp.auth().onAuthStateChanged(this.authenticateHandler);
	}

	authenticateHandler = (user, error) => {
		if(user) {
			this.props.handleLogin();
		}
	};

	render() {
		if (this.props.isLoggedIn) {
			return this.props.children
		}

		return this.props.loginComponent;
	}
}

AuthenticatedLayout.PropTypes = {
	loginComponent: PropTypes.element,
}

export default AuthenticatedLayout;