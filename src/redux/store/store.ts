import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWare,
});

sagaMiddleWare.run(rootSaga);
