import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, onSnapshot, addDoc, serverTimestamp, deleteDoc } from 'firebase/firestore';

import { db } from './firebase';

const App = () => {
  const [users, setUsers] = useState();
  const [data, setData] = useState({ name: '', email: '' });

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usersColletionRef = collection(db, 'users');
    const documentRef = await addDoc(usersColletionRef, {
      name: data.name,
      email: data.email,
      timestamp: serverTimestamp(),
    });

    console.log(documentRef);
    setData({ name: '', email: '' });
  };

  const handleDelete = async (id) => {
    console.log({ id });
    const userDocumentRef = doc(db, 'users', id);
    await deleteDoc(userDocumentRef);
  };

  // useEffect(() => {
  //   console.log('一覧取得');
  //   const usersColletionRef = collection(db, 'users');
  //   getDocs(usersColletionRef).then((querySnapshot) => {
  //     // querySnapshot.docs.forEach((doc) => console.log({ data: doc.data() }));
  //     setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });
  // }, []);

  useEffect(() => {
    console.log('1件取得');
    const UserDocumentRef = doc(db, 'users', 'mDWPknr7teW8kriADlX7');
    getDoc(UserDocumentRef).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        console.log({ data: documentSnapshot.data() });
      } else {
        console.log('No Data');
      }
    });
  }, []);

  useEffect(() => {
    console.log('リアルタイム取得');
    const usersColletionRef = collection(db, 'users');
    const unsub = onSnapshot(usersColletionRef, (querySnapshot) => {
      setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsub;
  }, []);

  return (
    <>
      <h1>ユーザー一覧</h1>
      {users?.map((user) => (
        <div key={user.id}>
          ID：{user.id} Name：{user.name}
          <button onClick={() => handleDelete(user.id)}>削除</button>
        </div>
      ))}
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前</label>
          <input name="name" value={data.name} onChange={handleChangeData} />
        </div>
        <div>
          <label>メールアドレス</label>
          <input name="email" value={data.email} onChange={handleChangeData} />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </>
  );
};

export default App;
