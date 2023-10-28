import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { set } from '../store/modules/user';

const LayoutDefault = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      console.log('ログイン状態変更');
      // console.log({ user });
      if (user) {
        dispatch(
          set({
            status: true,
            uid: user.uid,
            email: user.email,
            appName: user.appName,
          }),
        );
      } else {
        dispatch(
          set({
            status: false,
          }),
        );
      }
    });

    return () => unsubscribed();
  }, []);

  return (
    <>
      <h1>Firebase Authentication</h1>
      <Outlet />
    </>
  );
};

export default LayoutDefault;
