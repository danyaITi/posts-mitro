import { AxiosError } from 'axios';
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import {
    getCommentsFullfiled,
    getCommentsPending,
    getCommentsRejected,
    Comment,
} from '../reducers/commentsSlice';
import { fetchPosts } from './api';

function* fetchCommentsSaga(): Generator {
    try {
        yield delay(500);
        const posts = yield call(fetchPosts);
        yield put(getCommentsFullfiled(posts as Comment[]));
    } catch (e) {
        const error = e as AxiosError;
        yield put(getCommentsRejected(error.message));
    }
}

export function* watchFetchComments() {
    yield takeLatest(getCommentsPending.type, fetchCommentsSaga);
}
