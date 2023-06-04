import { AnyAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import {
    getCommentsFullfiled,
    getCommentsPending,
    getCommentsRejected,
    Comment,
} from '../reducers/commentsSlice';
import { fetchComments } from './api';

function* fetchCommentsSaga(action: AnyAction): Generator {
    const { id } = action.payload;
    try {
        yield delay(500);
        const posts = yield call(fetchComments, id);
        yield put(getCommentsFullfiled(posts as Comment[]));
    } catch (e) {
        const error = e as AxiosError;
        yield put(getCommentsRejected(error.message));
    }
}

export function* watchFetchComments() {
    yield takeLatest(getCommentsPending.type, fetchCommentsSaga);
}
