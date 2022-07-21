import {put, takeEvery} from 'redux-saga/effects';
import {fetchSlice} from '../slice/fetch.slice';
import {fetchData} from '../service/service';

function* fetchDetails() {
  console.log('Here is SAGAzzzzzzzzzzz');
  const data = yield fetchData();
  // console.log('DATA', data.entries[1].Description);
  //   console.log('count', data.entries.length);
  //   data.entries.forEach(element => {
  //     console.log('hey', element.Description);
  //   });
  const DATA = [];
  for (let i = 0; i <= 10; i++) {
    // data.entries[i].Description;
    DATA.push(data.entries[i].Description);
    console.log('data', DATA);
  }

  yield put(fetchSlice.actions.dataItem({item: DATA}));
}

export function* fetchSaga() {
  yield takeEvery('fetch/fetchDetails', fetchDetails);
}
