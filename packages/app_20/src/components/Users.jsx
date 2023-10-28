import axios from 'axios';
import { useQuery } from 'react-query';

const getUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const Users = () => {
  const response = useQuery('users', getUsers, { retry: 10 });
  console.log({ response });

  if (response.isLoading) return <span>Loading...</span>;

  if (response.isError) return <span>Error: {response.error.message}</span>;

  return (
    <>
      <h2>ユーザー一覧</h2>
      <div>
        {response.data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export default Users;
