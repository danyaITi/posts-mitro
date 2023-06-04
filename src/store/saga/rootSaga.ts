import { all } from 'redux-saga/effects';
import { watchFetchPostsById } from './postsByIdSaga';
import { watchFetchPosts } from './postsSaga';

export default function* rootSaga() {
    yield all([watchFetchPosts(), watchFetchPostsById()]);
}
