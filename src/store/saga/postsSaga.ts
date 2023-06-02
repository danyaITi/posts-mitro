import { AxiosError } from 'axios';
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import {
    getPostsFullfiled,
    getPostsPending,
    getPostsRejected,
    GET_POSTS,
    Post,
    PostsAction,
} from '../reducers/postsSlice';
import { fetchPosts, fetchUserPosts } from './api';

function* fetchPostsSaga(): Generator {
    yield put(getPostsPending());
    try {
        yield delay(500);
        if (PostsAction().payload) {
            const posts = yield call(fetchUserPosts, 1);
            yield put(getPostsFullfiled(posts as Post[]));
        } else {
            const posts = yield call(fetchPosts);
            yield put(getPostsFullfiled(posts as Post[]));
        }
    } catch (e) {
        const error = e as AxiosError;
        yield put(getPostsRejected(error.message));
    }
}

export function* watchFetchPosts() {
    yield takeLatest(GET_POSTS, fetchPostsSaga);
}
