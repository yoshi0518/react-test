import Weather from './components/Weather';

/**
 * Docs
 * https://openweathermap.org/current
 * https://openweathermap.org/api/geocoding-api
 */
const App = () => {
  const cities = [
    { name: 'Tokyo', color: 'blue' },
    { name: 'London', color: 'red' },
    { name: 'Paris', color: 'blue' },
    { name: 'Los Angeles', color: 'red' },
  ];
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-wrap">
        {cities.map((city, index) => (
          <Weather city={city.name} color={city.color} key={index} />
        ))}
      </div>
    </>
  );
};

export default App;
