import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Login from './components/Login';
import firebaseApp from './firebaseApp';

class App extends Component {

	componentWillMount(){
		this.handleLogout();
	}

	handleLogin = () => {
		this.setState({
			isLoggedIn: true,
		});
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

              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
              </header>
              <button onClick={this.logout}>Logout</button>
              <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </AuthenticatedLayout>
      </div>
    );
  }
}

export default App;
