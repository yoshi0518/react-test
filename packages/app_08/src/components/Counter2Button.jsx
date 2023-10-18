import { useDispatch } from 'react-redux';
import { add, minus } from '../store/modules/count2';

const Counter2Button = ({ calcType, step }) => {
  const dispatch = useDispatch();

  const clickHander = () => {
    const action = calcType === '+' ? add(step) : minus(step);
    console.log({ action });
    dispatch(action);
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

export default Counter2Button;
