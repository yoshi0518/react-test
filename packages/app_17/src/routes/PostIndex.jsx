import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log({ response });

      setPosts(response.data);
    };

    getPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`${post.id}`}>
            {post.id}：{post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostIndex;
