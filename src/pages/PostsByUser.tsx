import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardPost from '../components/CardPost';
import { RootState } from '../store/store';

export const PostsByUser = () => {
    const { posts, loading } = useSelector(
        (state: RootState) => state.postsById,
    );
    let { id } = useParams();

    if (loading) {
        return (
            <div className="position-absolute top-50 start-50">
                <Spinner variant="primary" />;
            </div>
        );
    }

    return (
        <div className="d-flex align-items-center flex-column">
            <b>Posts by user with id: {id}</b>
            <ul>
                {posts?.map((post) => (
                    <CardPost item={post} />
                ))}
            </ul>
        </div>
    );
};
