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
        getPostsByIdPending: (state) => {
            state.loading = true;
            state.error = null;
        },
        getPostsByIdFullfiled: (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.posts = action.payload;
        },
        getPostsByIdRejected: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getPostsByIdPending,
    getPostsByIdFullfiled,
    getPostsByIdRejected,
} = postsByIdSlice.actions;

export default postsByIdSlice.reducer;
