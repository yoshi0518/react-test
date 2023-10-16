import { useState } from 'react';
import ComponentA from './components/ComponentA';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>stateをprops渡し</h1>
      <ComponentA count={count} setCount={setCount} />
    </>
  );
}

export default App;
