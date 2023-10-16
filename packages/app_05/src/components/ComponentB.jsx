import ComponentC from './ComponentC';

const ComponentB = ({ count, setCount }) => {
  return (
    <>
      <div>ComponentB</div>
      <ComponentC count={count} setCount={setCount} />
    </>
  );
};

export default ComponentB;
