import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20';

export const getPosts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        throw new Error(error.message);
    }
};
