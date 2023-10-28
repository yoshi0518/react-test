import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const postLoader = async ({ params }) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  return { post: response.data };
};

const Post = () => {
  const navigate = useNavigate();
  const { post } = useLoaderData();
  console.log({ post });

  return (
    <>
      <h2>Single Post</h2>
      <div>
        <p>ID：{post.id}</p>
        <p>Title：{post.title}</p>
        <p>Body：{post.body}</p>
      </div>
      <div>
        <button onClick={() => navigate('/posts')}>戻る</button>
      </div>
    </>
  );
};

export default Post;
