import { useEffect, useState } from 'react';

// 依存配列あり(空配列) => 初回描画のみ実行

const Fetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('[Fetch]初回描画のみ');

    // Promiseを利用する場合
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => {
    //     console.log({ response });
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log({ data });
    //     setPosts(data);
    //   });

    // async・awaitを利用する場合
    const fetchPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      console.log({ response });
      const posts = await response.json();
      console.log({ posts });
      setPosts(posts);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{`userId：${post.userId} id：${post.id} title：${post.title}`}</div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
