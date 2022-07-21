import {all} from 'redux-saga/effects';
import {fetchSaga} from '../sagas/fetch.saga';

function* rootSaga() {
  yield all([fetchSaga()]);
}
export {rootSaga};
