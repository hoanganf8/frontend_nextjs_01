import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../redux/middlewares/postMiddleware";

const Posts = () => {
    const dispatch= useDispatch();
    const postList = useSelector(state => state.post.postList)
    const status = useSelector(state => state.post.status);
    const [title, setTitle] = useState('');
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    if (status === 'error') {
        return <h3>Đã có lỗi xảy ra</h3>
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title}));
        setTitle('')
    }
    return (
        <div>
            <h2>Posts</h2>
            {
                status !== 'idle' && (
                    status === 'pending' ? <h3>Loading...</h3>:  postList.map(({id, title}) => <h3 key={id}>{title}</h3>)
                )
               
            }
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tiêu đề..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                <button>Thêm</button>
            </form>
        </div>
    );
}

export default Posts;
