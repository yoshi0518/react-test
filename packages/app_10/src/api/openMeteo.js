import axios from 'axios';

const ENDPOINT_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Asia%2FTokyo&past_days=92';

const openMeteoApi = {
  get: async () => {
    const response = await axios.get(ENDPOINT_URL);
    return response.data;
  },
};

export default openMeteoApi;
