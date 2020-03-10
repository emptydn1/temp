import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

const TaskList = ({ classes, status, task }) => {
	const showList = () => {
		if (task) {
			return task.map(y => (
				<TaskItem key={y.id} task={y} status={status} />
			));
		}
		return null;
	};

	return (
		<Grid item md={4} xs={12}>
			<Box m={4}>
				<div style={{ textAlign: 'center' }} className={classes.status}>
					{status.label}
				</div>
			</Box>
			<div>{showList()}</div>
		</Grid>
	);
};

TaskList.propTypes = {
	classes: PropTypes.object,
	status: PropTypes.object,
	task: PropTypes.array
};

export default withStyles(styles)(TaskList);
