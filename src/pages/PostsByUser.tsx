import { useParams } from 'react-router-dom';

export const PostsByUser = () => {
    let { id } = useParams();

    return (
        <div>
            <b>Posts by user with id: {id}</b>
        </div>
    );
};
