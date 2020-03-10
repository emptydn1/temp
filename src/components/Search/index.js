import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Search = ({ classes, handleChange }) => {
	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-name"
				label="Search"
				onChange={handleChange}
				autoComplete="off"
			/>
		</form>
	);
};

Search.propTypes = {
	classes: PropTypes.object,
	handleChange: PropTypes.func
};

export default withStyles(styles)(Search);
