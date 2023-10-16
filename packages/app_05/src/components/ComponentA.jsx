import ComponentB from './ComponentB';

const ComponentA = ({ count, setCount }) => {
  return (
    <>
      <div>ComponentA</div>
      <ComponentB count={count} setCount={setCount} />
    </>
  );
};

export default ComponentA;
