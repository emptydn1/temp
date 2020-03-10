import { Button, Grid, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from '../../../node_modules/prop-types';
import React, { useEffect, useState } from '../../../node_modules/react';
import * as taskActions from '../../actions/index';
import * as modalActions from '../../actions/modals';
import Search from '../../components/Search';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUS } from '../../constants';
import styles from './styles';

const Taskboard = ({ classes, taskAction, ListTask, modalAction }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		const {
			showModal,
			hideModal,
			changeModalTitle,
			changeModalContent
		} = modalAction;
		showModal();
	};

	const handleChange = e => {
		const { value } = e.target;
		const { filterTask } = taskActions;
		filterTask(value);
	};

	const renderboard = () => {
		let xml = null;
		if (ListTask) {
			xml = (
				<Grid container spacing={2}>
					{STATUS.map(status => {
						const task = ListTask.filter(
							x => x.status === status.value
						);
						return (
							<TaskList
								key={status.value}
								task={task}
								status={status}
							/>
						);
					})}
				</Grid>
			);
		}
		return xml;
	};

	const renderform = () => {
		let xml = null;
		xml = <TaskForm open={open} handleClose={handleClose} />;
		return xml;
	};

	const renderSearch = () => {
		let xml = null;
		xml = <Search handleChange={handleChange} />;
		return xml;
	};

	const { fetchListTask } = taskAction;
	useEffect(() => {
		fetchListTask();
		// fetchListTaskRequest();
	}, [fetchListTask]);

	return (
		<div className={classes.screen}>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
			>
				<Icon style={{ fontSize: 30, marginRight: 20 }}>
					add_circle
				</Icon>
				thêm mới công việc
			</Button>
			{renderSearch()}
			{renderboard()}
			{renderform()}
		</div>
	);
};

Taskboard.propTypes = {
	classes: PropTypes.object,
	taskAction: PropTypes.shape({
		fetchListTask: PropTypes.func,
		filterTask: PropTypes.func
	}),
	ListTask: PropTypes.array,
	modalAction: PropTypes.object
};

const mapStateToProps = state => {
	return {
		ListTask: state.task.task
	};
};

const mapDispatchToProps = dispatch => {
	return {
		taskAction: bindActionCreators(taskActions, dispatch),
		modalAction: bindActionCreators(modalActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Taskboard));
