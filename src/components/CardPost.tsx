<<<<<<< HEAD
import { getPostsPending } from '../store/reducers/postsByIdSlice';
import { Post } from '../store/reducers/postsSlice';
import { useStoreDispatch } from '../store/store';
==
import { Post } from '../store/reducers/postsSlice';
>>>>>>> a67cd9560a7e227e42f6aacd052c4e968543bb22

interface CardPostProps<T> {
    item: T;
}

co

inst CardPost = <T extends Post>({ item }: CardPostProps<T>) => {
<<<<<<< HEAD
    const dispatch = useStoreDispatch();

    const handlePostsById = (userId: number) => {
        dispatch(getPostsPending({ userId } as any));
    };
    return (
    ===
===
    rr>>>>>  return (d} . Name="mt-5">
>>>>>  return   ole={'button'}
                src="https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png"
     <<<<<          ht={40}
<<<<<=======ick={() => handlePostsyId(item.userId)}
=====>>>>>>>>a67cd9560a7e227e42f6aacd052c4e968543bb22>>>>cd9560a68543bb22
                               <button className="p-1">Комментарии</button>
        </li>
    );
};

export default CardPost;
