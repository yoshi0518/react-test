import Counter3Button from './Counter3Button';
import Counter3Result from './Counter3Result';

import { add, minus, addAsync, minusAsync } from '../store/modules/count3';

const Counter3 = () => {
  return (
    <>
      <h1>カウンター3</h1>
      <Counter3Result />
      <div>
        <Counter3Button calcType="+" step={2} actionCreator={add} />
        <Counter3Button calcType="+" step={5} actionCreator={add} />
        <Counter3Button calcType="(async)+" step={8} actionCreator={addAsync} />
        <Counter3Button calcType="-" step={2} actionCreator={minus} />
        <Counter3Button calcType="-" step={5} actionCreator={minus} />
        <Counter3Button calcType="(async)-" step={8} actionCreator={minusAsync} />
      </div>
    </>
  );
};

export default Counter3;
