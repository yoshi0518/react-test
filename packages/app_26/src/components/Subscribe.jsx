import { useEffect } from 'react';
import useUserStore from '../store/useUserStore';

const Subscribe = () => {
  useEffect(() => {
    const unsub1 = useUserStore.subscribe((currentState, prevState) => {
      console.log('=== subscribe ===');
      console.log({ currentState, prevState });
    });
    return () => unsub1();
  }, []);

  return <div>subscribe</div>;
};

export default Subscribe;
