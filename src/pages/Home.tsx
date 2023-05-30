import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsPending } from '../store/reducers/postsSlice';

export const Home = () => {
    // const dispacth = useDispatch();
    // useEffect(() => {
    //     dispacth(fetchPostsPending());
    // }, [dispacth]);

    return <div>Home</div>;
};
