import useCountStore from '../store';

const Reset = () => {
  const { reset } = useCountStore((state) => ({
    reset: state.reset,
  }));

  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Reset;
