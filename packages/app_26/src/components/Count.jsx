import useCountStore from '../store';

const Count = () => {
  // Selector
  const count = useCountStore((state) => state.count);
  // 分割代入(再描画を抑止するためにはSelectorを利用する)
  // const { count } = useStore();

  return <div>{count}</div>;
};

export default Count;
