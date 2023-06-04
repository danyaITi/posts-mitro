import { all } from 'redux-saga/effects';
import { watchFetchComments } from './commentsSaga';
import { watchFetchPostsById } from './postsByIdSaga';
import { watchFetchPosts } from './postsSaga';

export default function* rootSaga() {
    yield all([watchFetchPosts(), watchFetchPostsById(), watchFetchComments()]);
}
