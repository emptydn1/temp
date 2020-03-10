import {
	fork,
	take,
	call,
	put,
	delay,
	takeLatest,
	select
} from 'redux-saga/effects';
import * as takeTypes from '../constants/task';
import { STATUS_CODE } from '../constants';
import { getList } from '../apis/task';
import {
	fetchListTaskSuccess,
	fetchListTaskFailed,
	filterTaskSuccess
} from '../actions';
import { showloading, hideloading } from '../actions/ui';

function* watchFetchListTaskAction() {
	while (true) {
		yield take(takeTypes.FETCH_TASK);
		yield put(showloading());
		const res = yield call(getList);
		const { status, data } = res;
		if (status === STATUS_CODE.SUCCESS) {
			yield put(fetchListTaskSuccess(data));
		} else {
			yield put(fetchListTaskFailed(data));
		}
		yield delay(1000);
		yield put(hideloading());
	}
}

function* filterTaskSaga({ payload }) {
	yield delay(500);
	const { key } = payload;
	const list = yield select(state => state.task.task);
	const filterTask = list.filter(task =>
		task.title
			.trim()
			.toLowerCase()
			.includes(key.trim().toLowerCase())
	);
	yield put(filterTaskSuccess(filterTask));
}

function* mySaga() {
	yield fork(watchFetchListTaskAction);
	yield takeLatest(takeTypes.FILTER_TASK, filterTaskSaga);
}

export default mySaga;
