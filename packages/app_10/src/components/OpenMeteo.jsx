import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import OpenMeteoChart from './OpenMeteoChart';
import { getData } from '../store/modules/openMeteo';

const OpenMeteo = () => {
  const dispatch = useDispatch();

  // 初回描画時のデータ取得
  useEffect(() => {
    // console.log('初回描画');
    dispatch(getData());
  }, []);
  return <OpenMeteoChart />;
};

export default OpenMeteo;
