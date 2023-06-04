import { getPostsPending } from '../store/reducers/postsByIdSlice';
import { useStoreDispatch } from '../store/store';
import { Post } from '../store/reducers/postsSlice';

interface CardPostProps<T> {
    item: T;
}

const CardPost = <T extends Post>({ item }: CardPostProps<T>) => {
    const dispatch = useStoreDispatch();

    const handlePostsById = (userId: number) => {
        dispatch(getPostsPending({ userId } as any));
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
        </li>
    );
};

export default CardPost;
