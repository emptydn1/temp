import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const TaskForm = ({
	open,
	handleClose,
	classes,
	onSubmitForm,
	onChangeForm
}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<form onSubmit={handleClose}>
				<DialogTitle id="form-dialog-title" className={classes.abc}>
					Subscribe
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email
						address here. We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="tieu de"
						onChange={onChangeForm}
						fullWidth
					/>
					<TextField
						id="standard-textarea"
						label="mo ta"
						placeholder="Placeholder"
						onChange={onChangeForm}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={onSubmitForm} color="primary">
						Subscribe
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

TaskForm.propTypes = {
	classes: PropTypes.object,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	onSubmitForm: PropTypes.func,
	onChangeForm: PropTypes.func
};

export default withStyles(styles)(TaskForm);
