const ComponentC = ({ count, setCount }) => {
  return (
    <>
      <div>ComponentC</div>
      <div>Count：{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>＋</button>
        <button onClick={() => setCount(count - 1)}>－</button>
      </div>
    </>
  );
};

export default ComponentC;
