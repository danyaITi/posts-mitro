import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import CardPost from '../components/CardPost';
import { RootState } from '../store/store';

import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const PostsByUser = () => {
    const { posts, loading } = useSelector(
        (state: RootState) => state.postsById,
    );
    let { id } = useParams();
    let navigate = useNavigate();

    if (loading) {
        return (
            <div className="position-absolute top-50 start-50">
                <Spinner variant="primary" />;
            </div>
        );
    }

    return (
        <div className="d-flex align-items-center flex-column justify-content-center">
            <Button variant="outline-primary" onClick={() => navigate(-1)}>
                Назад
            </Button>
            <b>Posts by user with id: {id}</b>
            {posts?.map((post) => (
                <CardPost item={post} />
            ))}
        </div>
    );
};
