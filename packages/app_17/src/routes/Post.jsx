import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  console.log({ useLocation: useLocation() });

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      // console.log({ response });

      setPost(response.data);
    };

    getPost();
  }, [postId]);

  return (
    <>
      <h2>Single Post：{postId}</h2>
      <div>
        <p>ID：{post.id}</p>
        <p>Title：{post.title}</p>
        <p>Body：{post.body}</p>
      </div>
    </>
  );
};

export default Post;
