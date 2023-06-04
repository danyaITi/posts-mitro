import { AnyAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import {
    getPostsByIdFullfiled,
    getPostsByIdPending,
    getPostsByIdRejected,
    Post,
} from '../reducers/postsByIdSlice';
import { fetchPostsById } from './api';

function* fetchPostsByIdSaga(action: AnyAction): Generator {
    const { userId } = action.payload;
    try {
        yield delay(500);
        const posts = yield call(fetchPostsById, userId);
        yield put(getPostsByIdFullfiled(posts as Post[]));
    } catch (e) {
        const error = e as AxiosError;
        yield put(getPostsByIdRejected(error.message));
    }
}

export function* watchFetchPostsById() {
    yield takeLatest(getPostsByIdPending.type, fetchPostsByIdSaga);
}
