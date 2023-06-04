import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '../store/store';
import Spinner from 'react-bootstrap/Spinner';
import CardPost from '../components/CardPost';
import { getPostsPending } from '../store/reducers/postsSlice';
import { useNavigate } from 'react-router-dom';
import { getPostsByIdPending } from '../store/reducers/postsByIdSlice';

export const Home = () => {
    const dispacth = useStoreDispatch();
    const navigate = useNavigate();
    const { loading, posts } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispacth(getPostsPending());
    }, [dispacth]);

    const handlePostsById = (userId: number) => {
        dispacth(getPostsByIdPending({ userId } as any));
        navigate(`user/${userId}`);
    };

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
                    <CardPost
                        key={it.id}
                        item={it}
                        role="button"
                        handleClick={(userId: number) =>
                            handlePostsById(userId)
                        }
                    />
                ))}
            </ul>
        </>
    );
};
