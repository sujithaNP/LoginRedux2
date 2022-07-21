import {combineReducers} from 'redux';
import {fetchSlice} from '../slice/fetch.slice';

export const rootReducer = combineReducers({
  fetch: fetchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
