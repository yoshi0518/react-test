import useFetchData from '../hooks/useFetchData';

const Users = () => {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/users');

  return (
    <>
      <h1>ユーザー一覧</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
