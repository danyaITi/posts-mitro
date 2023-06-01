import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostsAction } from '../store/reducers/postsSlice';
import { RootState, useStoreDispatch } from '../store/store';

export const Home = () => {
    const dispacth = useStoreDispatch();
    const { loading, posts } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispacth(PostsAction());
    }, [dispacth]);

    return (
        <div>
            Home
            {loading && <h1>loading....</h1>}
            <ul>
                {posts?.map((it) => (
                    <li key={it.id}>{it.title}</li>
                ))}
            </ul>
        </div>
    );
};
