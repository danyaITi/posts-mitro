import { AxiosError } from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
    fetchPostsFullfiled,
    fetchPostsPending,
    fetchPostsRejected,
    Post,
} from '../reducers/postsSlice';
import { getPosts } from './api';

function* fetchPostsSaga(): Generator {
    yield put(fetchPostsPending());
    try {
        const posts = yield call(getPosts);
        yield put(fetchPostsFullfiled(posts as Post[]));
    } catch (e) {
        const error = e as AxiosError;
        yield put(fetchPostsRejected(error.message));
    }
}

export function* watchFetchPosts() {
    yield takeLatest(fetchPostsPending.type, fetchPostsSaga);
}
