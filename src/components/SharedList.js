import React from 'react';
import {List, ListItem, ListItemText, ListSubheader, ListItemIcon} from "material-ui";
import base from '../base';

class SharedList extends React.Component {
	componentWillMount(){
		this.setState({
			items: []
		});
	}

	componentDidMount(){
		base.syncState(`lists/`+this.props.match.params.listId, {
			context: this,
			state: 'items'
		});
	}

	toggleListItem = (key) => {
		const items = {...this.state.items};
		items.items[key].done = !items.items[key].done;
		this.setState({items});
	}

	renderListItem = (key, item) => {
		const toggleItem = () => this.toggleListItem(key);

		return(
			<ListItem style={{textDecoration: item.done ? 'line-through' : 'none'}} key={key} button onClick={toggleItem}>
				{item.title}
			</ListItem>
		)
	};

	getList = () => {
		if(this.state.items.items && this.state.items.items.length > 0){
			return Object.keys(this.state.items.items).map((itemKey) => {
				return this.renderListItem(itemKey, this.state.items.items[itemKey]);
			});
		} else {
			return(
				<ListItem button>
					Keine Einträge vorhanden
				</ListItem>
			)
		}
	};

	render() {
		return (
			<div>
				<List subheader={<ListSubheader>{this.state.items.title}</ListSubheader>}>
					{this.getList()}
				</List>
			</div>
		)
	}
}

export default SharedList;