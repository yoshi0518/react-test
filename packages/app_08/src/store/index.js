import { configureStore } from '@reduxjs/toolkit';
import count1Reducer from './modules/count1';
import count2Reducer from './modules/count2';
import count3Reducer from './modules/count3';
import count4Reducer from './modules/count4';

export default configureStore({
  reducer: {
    count1: count1Reducer,
    count2: count2Reducer,
    count3: count3Reducer,
    count4: count4Reducer,
  },
});
