import React, {Component} from 'react';
import './App.css';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Login from './components/Login';
import firebaseApp from './firebaseApp';
import Main from "./Main";

class App extends Component {

	componentWillMount() {
		this.handleLogout();
	}

	handleLogin = () => {
		this.setState({
			isLoggedIn: true,
		});

		return null;
	};

	handleLogout = () => {
		this.setState({
			isLoggedIn: false,
		});
	}

	logout = () => {
		firebaseApp.auth().signOut()
		this.handleLogout();
	};

	render() {
		return (
			<div className="App">
				<AuthenticatedLayout
					handleLogin={this.handleLogin}
					isLoggedIn={this.state.isLoggedIn}
					loginComponent={<Login handleLogin={this.handleLogin}/>}
				>
					<Main logout={this.logout}></Main>
				</AuthenticatedLayout>
			</div>
		);
	}
}

export default App;
