import React from 'react';
import {Button, List, ListItem, ListItemText} from "material-ui";
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import {withRouter} from "react-router-dom";
import base from '../base';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		zIndex: 100,
		position: 'absolute',
		top: 300,
	},
});

class ListList extends React.Component {

	constructor(){
		super();
	}

	componentWillMount(){
		this.setState({
			items: []
		});
	}

	componentDidMount(){
		base.syncState(`lists`, {
			context: this,
			state: 'items',
			asArray: true
		});
	}

	addItem = () => {
		const newItem = {
			title: 'lustiger titel',
			owner: 'sajdhgasds',
			sharedWith: [],
			items: [{
				title: 'Brot',
				done: false
			},
			{
				title: 'Milch',
				done: true
			}],
		};

		this.setState({
			items: this.state.items.concat([newItem]) //updates Firebase and the local state
		});
	}

	renderListItem = (item) => {
		return(
			<ListItem key={item.key} button onClick={() => this.props.history.push('/list/'+item.key)}>
				<ListItemText
					primary={item.title}
					secondary="Geteilt mit 1 Personen"
				/>
			</ListItem>
		);
	}

	getLists = () => {
		return this.state.items.map(this.renderListItem);
	};

	render() {
		return (
			<div>
				<Button onClick={() => {this.addItem()}}fab color="primary" aria-label="add" className='button' style={{zIndex: 100, position: 'absolute', bottom: '15px', right: '15px'}}>
					<AddIcon />
				</Button>
				<List>
					{this.getLists()}
					<ListItem button onClick={() => this.props.history.push('/list/xdfghijkoö')}>
						<ListItemText
							primary="Raclette bei XY"
							secondary="Geteilt mit 3 Personen"
						/>
					</ListItem>
					<ListItem button onClick={() => this.props.history.push('/list/xdfghijkoö')}>
						<ListItemText
							primary="Festival 2018"
							secondary="Geteilt mit 12 Personen"
						/>
					</ListItem>
				</List>
			</div>
		)
	}

}

export default withStyles(styles)(withRouter(ListList));