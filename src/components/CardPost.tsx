import { Post } from '../store/reducers/postsSlice';

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
    const onClick = (id: number) => {
        if (handleClick) handleClick(id);
    };

    return (
        <li className="mt-5">
            <img
                role={role}
                src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png"
                height={40}
                onClick={() => onClick(item.userId)}
            />
            <b>{item.title}</b>
            <p>{item.body}</p>
            <button className="p-1">Комментарии</button>
        </li>
    );
};

export default CardPost;
