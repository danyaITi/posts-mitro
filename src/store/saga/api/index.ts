import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        throw new Error(error.message);
    }
};

export const fetchPostsById = async (userId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}?userId=${userId}`);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        throw new Error(error.message);
    }
};
