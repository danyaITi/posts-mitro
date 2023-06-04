import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import { useDispatch } from 'react-redux';

import postsReducer from './reducers/postsSlice';
import postsByIdReducer from './reducers/postsByIdSlice';
import commentsReducer from './reducers/commentsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        postsById: postsByIdReducer,
        comments: commentsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
