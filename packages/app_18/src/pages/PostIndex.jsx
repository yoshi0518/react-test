import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';

export const postsLoader = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return { posts: response.data };
};

const PostIndex = () => {
  const { posts } = useLoaderData();
  // console.log({ posts });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.id}：{post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostIndex;
