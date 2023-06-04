import { createSlice } from '@reduxjs/toolkit';
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

export const postsByIdSlice = createSlice({
    name: 'postsById',
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

export const { getPostsPending, getPostsFullfiled, getPostsRejected } =
    postsByIdSlice.actions;

export default postsByIdSlice.reducer;
