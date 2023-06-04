import Toast from 'react-bootstrap/Toast';
import { Comment } from '../store/reducers/commentsSlice';

interface CommentProps<T> {
    comment: T;
}

export const CommentByUser = <T extends Comment>({
    comment,
}: CommentProps<T>) => {
    return (
        <Toast className="mb-2">
            <Toast.Header closeButton={false}>
                <strong className="me-auto">{comment.email}</strong>
            </Toast.Header>
            <Toast.Body>{comment.body}</Toast.Body>
        </Toast>
    );
};
