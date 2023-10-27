import { Outlet } from 'react-router-dom';

const Posts = () => {
  return (
    <>
      <h1>Posts</h1>
      <Outlet />
    </>
  );
};

export default Posts;
