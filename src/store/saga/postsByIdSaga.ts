import { AnyAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import {
    getPostsFullfiled,
    getPostsPending,
    getPostsRejected,
    Post,
} from '../reducers/postsByIdSlice';
import { fetchPostsById } from './api';

function* fetchPostsByIdSaga(action: AnyAction): Generator {
    const { userId } = action.payload;
    try {
        yield delay(500);
        const posts = yield call(fetchPostsById, userId);
        yield put(getPostsFullfiled(posts as Post[]));
    } catch (e) {
        const error = e as AxiosError;
        yield put(getPostsRejected(error.message));
    }
}

export function* watchFetchPostsById() {
    yield takeLatest(getPostsPending.type, fetchPostsByIdSaga);
}
