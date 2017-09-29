import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {IconButton} from "material-ui";
import LeftIcon from 'material-ui-icons/';


const styles = theme => ({
	root: {
		marginTop: theme.spacing.unit * 3,
		width: '100%',
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

const Header = (props) => {
	const classes = props.classes;

	const renderHistoryBackButton = () => {
		if(props.location.pathname !== '/'){
			return (
				<Button className={classes.menuButton} color="contrast" aria-label="Menu" onClick={() => props.history.goBack()}>
					&lt;
				</Button>
			)
		} else {
			return;
		}
	}


	return (
			<div>
				<AppBar position="static">
					<Toolbar>
						{renderHistoryBackButton()}
						<Typography type="title" color="inherit" className={classes.flex}>
							ShopTogether
						</Typography>
						<Button color="contrast" onClick={props.logout.bind()}>Ausloggen</Button>
					</Toolbar>
				</AppBar>
			</div>
		)

}

export default withStyles(styles)(Header);