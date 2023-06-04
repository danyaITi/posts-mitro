import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface CommentsState {
    comments: Comment[] | [];
    loading: boolean;
    error: null | string;
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsPending: (state) => {
            state.loading = true;
            state.error = null;
        },
        getCommentsFullfiled: (state, action: PayloadAction<Comment[]>) => {
            state.loading = false;
            state.comments = action.payload;
        },
        getCommentsRejected: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getCommentsPending, getCommentsFullfiled, getCommentsRejected } =
    commentsSlice.actions;

export default commentsSlice.reducer;
