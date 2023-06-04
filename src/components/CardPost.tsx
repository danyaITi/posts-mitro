import { Post } from '../store/reducers/postsSlice';

import Card from 'react-bootstrap/Card';
import { useStoreDispatch } from '../store/store';
import { getCommentsPending } from '../store/reducers/commentsSlice';

interface CardPostProps<T> {
    item: T;
    handleClick?: (arg: number) => void;
    role?: 'button';
}

const CardPost = <T extends Post>({
    item,
    handleClick,
    role,
}: CardPostProps<T>) => {
    const dispatch = useStoreDispatch();
    const onClick = (id: number) => {
        if (handleClick) handleClick(id);
    };

    const handleComments = (id: number) => {
        dispatch(getCommentsPending({ id } as any));
    };

    return (
        <Card className="w-75 mt-4">
            <Card.Body>
                <Card.Title className="text-success">{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <img
                        role={role}
                        src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png"
                        height={40}
                        onClick={() => onClick(item.userId)}
                    />
                </Card.Subtitle>
                <Card.Text>{item.body}</Card.Text>
                <Card.Link
                    role={role}
                    onClick={() => handleComments(item.userId)}
                >
                    Комментарии
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

export default CardPost;
