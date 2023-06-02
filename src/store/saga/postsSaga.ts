import { AxiosError } from 'axios';
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import {
    getPostsFullfiled,
    getPostsPending,
    getPostsRejected,
    GET_POSTS,
    Post,
} from '../reducers/postsSlice';
import { fetchPosts } from './api';

function* fetchPostsSaga(): Generator {
    yield put(getPostsPending());
    try {
        yield delay(500);
        const posts = yield call(fetchPosts);
        yield put(getPostsFullfiled(posts as Post[]));
    } catch (e) {
        const error = e as AxiosError;
        yield put(getPostsRejected(error.message));
    }
}

export function* watchFetchPosts() {
    yield takeLatest(GET_POSTS, fetchPostsSaga);
}
