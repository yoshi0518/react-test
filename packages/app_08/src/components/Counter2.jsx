import Counter2Button from './Counter2Button';
import Counter2Result from './Counter2Result';

const Counter2 = () => {
  return (
    <>
      <h1>カウンター2</h1>
      <Counter2Result />
      <div>
        <Counter2Button calcType="+" step={2} />
        <Counter2Button calcType="+" step={5} />
        <Counter2Button calcType="-" step={2} />
        <Counter2Button calcType="-" step={5} />
      </div>
    </>
  );
};

export default Counter2;
