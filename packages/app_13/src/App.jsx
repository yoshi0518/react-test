import Input from './components/Input';
import File from './components/File';
import Count from './components/Count';
import FormState from './components/FormState';
import FormRef from './components/FormRef';

const App = () => {
  return (
    <>
      <h1>フォーカス取得、スタイル変更</h1>
      <Input />

      <h1>ファイル選択</h1>
      <File />

      <h1>カウンター</h1>
      <Count />

      <h1>フォーム(useState)</h1>
      <FormState />

      <h1>フォーム(useRef)</h1>
      <FormRef />
    </>
  );
};

export default App;
