import { useEffect } from 'react';
import useUserStore from '../store/useUserStore';

const Users = () => {
  const users = useUserStore((state) => state.users);
  const getUsers = useUserStore((state) => state.getUsers);
  const deleteUser = useUserStore((state) => state.deleteUser);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.id}：{user.name}
          <button onClick={() => deleteUser(user.id)}>削除</button>
        </div>
      ))}
    </>
  );
};

export default Users;
