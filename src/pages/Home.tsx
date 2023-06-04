import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '../store/store';
import Spinner from 'react-bootstrap/Spinner';
import CardPost from '../components/CardPost';
import { getPostsPending } from '../store/reducers/postsSlice';

export const Home = () => {
    const dispacth = useStoreDispatch();
    const { loading, posts } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispacth(getPostsPending());
    }, [dispacth]);

    if (loading) {
        return (
            <div className="position-absolute top-50 start-50">
                <Spinner variant="primary" />;
            </div>
        );
    }

    return (
        <>
            <ul>
                {posts?.map((it) => (
                    <CardPost key={it.id} item={it} />
                ))}
            </ul>
        </>
    );
};
