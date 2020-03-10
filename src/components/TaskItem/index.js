import {
	Card,
	CardActions,
	CardContent,
	Fab,
	Grid,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Delete, Edit } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const TaskItem = ({ task, status, classes }) => {
	return (
		<Card className={classes.card}>
			<CardContent>
				<Grid container justify="space-around">
					<Grid item md={9}>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							{task.title}
						</Typography>
						<div>{task.des}</div>
					</Grid>
					<Grid item md={3}>
						<Typography
							variant="body2"
							color="secondary"
							align="right"
							component="p"
						>
							{status.label}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions className={classes.CardActions}>
				<Fab color="primary" size="small" aria-label="edit">
					<Edit />
				</Fab>
				<Fab color="secondary" size="small" aria-label="delete">
					<Delete />
				</Fab>
			</CardActions>
		</Card>
	);
};

TaskItem.propTypes = {
	classes: PropTypes.object,
	task: PropTypes.object,
	status: PropTypes.object
};

export default withStyles(styles)(TaskItem);
