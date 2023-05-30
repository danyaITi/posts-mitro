import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
        fetchPostsPending: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPostsFullfiled: (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.posts = action.payload;
        },
        fetchPostsRejected: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPostsPending, fetchPostsFullfiled, fetchPostsRejected } =
    postsSlice.actions;

export default postsSlice.reducer;
