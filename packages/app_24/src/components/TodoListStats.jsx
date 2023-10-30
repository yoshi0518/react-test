import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../selector';

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(todoListStatsState);

  return (
    <>
      <h2>サマリー</h2>
      <div>登録数：{totalNum}</div>
      <div>完了数：{totalCompletedNum}</div>
      <div>未完了数：{totalUncompletedNum}</div>
    </>
  );
};

export default TodoListStats;
