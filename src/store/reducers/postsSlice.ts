import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: Post[] | [];
    loading: boolean;
    error: null | string;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsPending: (state) => {
            state.loading = true;
            state.error = null;
        },
        getPostsFullfiled: (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.posts = action.payload;
        },
        getPostsRejected: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const GET_POSTS = 'posts/getPosts';
export const PostsAction = createAction(GET_POSTS);

export const { getPostsPending, getPostsFullfiled, getPostsRejected } =
    postsSlice.actions;

export default postsSlice.reducer;
