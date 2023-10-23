import { createSlice } from '@reduxjs/toolkit';

import openMeteoApi from '../../api/openMeteo';

const openMeteo = createSlice({
  name: 'openMeteo',
  initialState: {
    latitude: '', // 緯度
    longitude: '', // 経度
    timezone: '', // タイムゾーン
    data: {
      time: [], // 日付
      temperature_2m_max: [], // 最高気温
      temperature_2m_min: [], // 最低気温
      precipitation_sum: [], // 降水量
      sunrise: [], // 日の出時刻
      sunset: [], // 日の入り時刻
    },
  },
  reducers: {
    updateData: (_, { payload }) => {
      return {
        latitude: payload.latitude,
        longitude: payload.longitude,
        timezone: payload.timezone,
        data: {
          time: payload.daily.time,
          temperature_2m_max: payload.daily.temperature_2m_max,
          temperature_2m_min: payload.daily.temperature_2m_min,
          precipitation_sum: payload.daily.precipitation_sum,
          sunrise: payload.daily.sunrise,
          sunset: payload.daily.sunset,
        },
      };
    },
  },
});

// ActionCreater
const { updateData } = openMeteo.actions;

// AcyncMiddleware
const getData = () => {
  return async (dispatch) => {
    const response = await openMeteoApi.get();
    dispatch(updateData(response));
  };
};

export { updateData, getData };
export default openMeteo.reducer;
