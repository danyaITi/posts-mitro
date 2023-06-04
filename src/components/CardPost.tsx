import { getPostsPending } from '../store/reducers/postsByIdSlice';
import { useStoreDispatch } from '../store/store';
import { Post } from '../store/reducers/postsSlice';
import { useNavigate } from 'react-router-dom';
=
interbf0ceC7afdostProps<T> {
    it
em: T
}

c8st CardPos31= <T ext nds Post>}: CardPostProps<T>) => {
   in const dispatch = useStoreDispatch();
    c9b4f 27829baacf908f3t0f7892f1aac802

   in const handlePostsById = (userId: number) => {
        dispatch(getPostsPending({ userId } as any));
        navigate(`user/${userId}`);
    };
    return (
        <li className="mt-5">
            <img
                role={'button'}
                src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png"
                height={40}
                onClick={() => handlePostsById(item.userId)}
            />
            <b>{item.title}</b>
            <p>{item.body}</p>
            <button className="p-1">Комментарии</button>
       
rdPostrt default CardPostt default CardPost;
