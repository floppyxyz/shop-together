import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Header from "./components/Header";
import ListList from "./components/ListList";
import SharedList from "./components/SharedList";

class Main extends React.Component {
	render(){
		const renderMergedProps = (component, ...rest) => {
			const finalProps = Object.assign({}, ...rest);
			return (
				React.createElement(component, finalProps)
			);
		}

		const PropsRoute = ({ component, ...rest }) => {
			return (
				<Route {...rest} render={routeProps => {
					return renderMergedProps(component, routeProps, rest);
				}}/>
			);
		}

		return (
			<div>
				<PropsRoute component={Header} logout={this.props.logout}/>
				<PropsRoute exact path="/" component={ListList} />
				<Route path="/list/:listId" component={SharedList} />
			</div>
		)
	}
}

export default Main;