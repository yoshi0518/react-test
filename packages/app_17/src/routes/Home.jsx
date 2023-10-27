import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams] = useSearchParams();

  console.log({
    hello: searchParams.get('hello'),
    foo: searchParams.get('foo'),
    yyy: searchParams.get('yyy'),
  });
  return <h2>Home</h2>;
};

export default Home;
