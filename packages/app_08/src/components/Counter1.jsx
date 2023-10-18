import Counter1Button from './Counter1Button';
import Counter1Result from './Counter1Result';

const Counter1 = () => {
  return (
    <>
      <h1>カウンター1</h1>
      <Counter1Result />
      <div>
        <Counter1Button calcType="+" step={2} />
        <Counter1Button calcType="+" step={5} />
        <Counter1Button calcType="-" step={2} />
        <Counter1Button calcType="-" step={5} />
      </div>
    </>
  );
};

export default Counter1;
