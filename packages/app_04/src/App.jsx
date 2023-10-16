import { useState } from 'react';

import LayoutEffect from './components/LayoutEffect';
import Counter from './components/Counter';
import Name from './components/Name';
import Fetch from './components/Fetch';
import Timer from './components/Timer';

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <LayoutEffect />
      <Counter />
      <Name />
      <Fetch />
      {display && <Timer />}
      <button onClick={() => setDisplay((display) => !display)}>Toggle</button>
    </>
  );
}

export default App;
