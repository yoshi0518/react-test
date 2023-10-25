import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const Weather = ({ city, color }) => {
  const { VITE_API_URL_CITY, VITE_API_URL_WEATHER, VITE_API_URL_ICON, VITE_API_KEY } = import.meta.env;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const className = `bg-gradient-to-r from-${color}-500 to-${color}-300 w-96 h-56 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform text-white relative`;

  useEffect(() => {
    const getData = async () => {
      // 都市情報を取得
      const responseCity = await axios.get(`${VITE_API_URL_CITY}?q=${city}&appid=${VITE_API_KEY}`);
      // console.log({ responseCity });

      // 天気情報を取得
      const responseWeather = await axios.get(
        `${VITE_API_URL_WEATHER}?lat=${responseCity.data[0].lat}&lon=${responseCity.data[0].lon}&units=metric&appid=${VITE_API_KEY}`,
      );
      // console.log({ responseWeather });

      // console.log({ data });
      setData({
        name: responseCity.data[0].name,
        localName: responseCity.data[0].local_names.ja,
        lat: responseCity.data[0].lat,
        lon: responseCity.data[0].lon,
        data: responseWeather.data,
      });
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center test-2xl">Loading...</div>
      ) : (
        <div className="p-4">
          <div className={className}>
            <div className="w-full px-8 absolute top-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-light">City Name</p>
                  <p className="text-lg font-medium tracking-widest">{data.localName}</p>
                </div>
                <div>
                  <img
                    src={`${VITE_API_URL_ICON}/${data.data.weather[0].icon}.png`}
                    alt={data.data.weather[0].description}
                  />
                </div>
              </div>
              <div className="pt-2">
                <p className="font-light">Weather Condition</p>
                <p className="text-lg font-medium tracking-widest">{data.data.weather[0].main}</p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-light text-xs">Date</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {dayjs.unix(data.data.dt).format('YYYY-MM-DD')}
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Temprature</p>
                    <p className="font-bold tracking-more-wider text-sm">{data.data.main.temp}°C</p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Humidity</p>
                    <p className="font-bold tracking-more-wider text-sm">{data.data.main.humidity}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
