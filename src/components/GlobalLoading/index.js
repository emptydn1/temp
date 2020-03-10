import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import loading from '../../assets/images/loading.gif';
import styles from './styles';
// import * as uiActions from '../../actions/ui';

const GlobalLoading = ({ classes, ui }) => {
	let xml = null;
	if (ui)
		xml = (
			<div className={classes.globalLoading}>
				<img src={loading} alt="abc" className={classes.icon} />
			</div>
		);
	return xml;
};

GlobalLoading.propTypes = {
	classes: PropTypes.object,
	ui: PropTypes.bool
};

const mapStateToProps = state => {
	return {
		ui: state.ui.showLoading
	};
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		uiActions: bindActionCreators(uiActions, dispatch)
// 	};
// };

export default connect(
	mapStateToProps,
	// mapDispatchToProps
	null
)(withStyles(styles)(GlobalLoading));
