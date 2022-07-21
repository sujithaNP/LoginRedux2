import {createSlice, PayloadAction, CaseReducer} from '@reduxjs/toolkit';

export type InitialState = {
  data: [];
};

const initialState: InitialState = {
  data: [],
};

type AuthReducer<Payload> = CaseReducer<InitialState, PayloadAction<Payload>>;
const fetchDetails: AuthReducer<{}> = state => state;

const dataItem: AuthReducer<{item: any}> = (state, action) => {
  // console.log('sTATE', action.payload.item.entries);
  state = action.payload.item;
  // console.log('statezzzzzzzzz', state);
  return state;
};

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    fetchDetails,
    dataItem,
  },
});
export {fetchSlice};
