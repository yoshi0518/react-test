import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      dispatch({
        type: 'GET_POST_DATA',
        payload: data,
      });
    };
    getPosts();
  }, [dispatch]);
  return (
    <>
      <h1>Postコンポーネント</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
