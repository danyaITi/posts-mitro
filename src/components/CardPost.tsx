import { Post } from '../store/reducers/postsSlice';

interface CardPostProps<T> {
    item: T;
}

const CardPost = <T extends Post>({ item }: CardPostProps<T>) => {
    return (
        <li key={item.id} className="mt-5">
            <img
                role={'button'}
                src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png"
                height={40}
            />
            <b>{item.title}</b>
            <p>{item.body}</p>
            <button className="p-1">Комментарии</button>
        </li>
    );
};

export default CardPost;
