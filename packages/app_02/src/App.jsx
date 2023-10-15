import Counter from './components/Counter';

const App = () => {
  const test = [10, 20, 30];
  const sum = test.reduce((prevVal, currentVal) => prevVal + currentVal, 0);

  console.log({ sum });

  const users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Kevin', email: 'kevin@test.com' },
    { name: 'David', email: 'david@example.info' },
  ];
  const mailAddress = users.map((user) => user.email);
  console.log({ mailAddress });
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
