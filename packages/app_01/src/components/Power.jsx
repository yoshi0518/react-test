import { useState } from 'react';

const Power = () => {
  const [power, setPower] = useState(false);

  return (
    <div>
      <h1>電源 {power ? 'ON' : 'OFF'}</h1>
      <button onClick={() => setPower((power) => !power)}>ON/OFF</button>
    </div>
  );
};

export default Power;
