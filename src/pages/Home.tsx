import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostsAction } from '../store/reducers/postsSlice';
import { RootState, useStoreDispatch } from '../store/store';

import Spinner from 'react-bootstrap/Spinner';

export const Home = () => {
    const dispacth = useStoreDispatch();
    const { loading, posts } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispacth(PostsAction());
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
                    <li key={it.id} className="mt-5">
                        <img
                            role={'button'}
                            src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png"
                            height={40}
                        />
                        <b>{it.title}</b>
                        <p>{it.body}</p>
                        <button className="p-1">Комментарии</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
