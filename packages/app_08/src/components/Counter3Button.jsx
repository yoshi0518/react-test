import { useDispatch } from 'react-redux';

const Counter3Button = ({ calcType, step, actionCreator }) => {
  const dispatch = useDispatch();

  const clickHander = () => {
    dispatch(actionCreator(step));
  };
  return (
    <>
      <button onClick={clickHander}>
        {calcType}
        {step}
      </button>
    </>
  );
};

export default Counter3Button;
