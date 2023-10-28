import useFetchData from '../hooks/useFetchData';

const Posts = () => {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      <h1>記事一覧</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
