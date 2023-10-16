import { useEffect, useState } from 'react';

// 依存配列なし => 初回描画、再描画時に実行
// 依存配列あり(空配列) => 初回描画のみ実行
// 依存配列あり(object) => objectのいずれかの要素に変更があった場合に実行
// 依存配列あり(object要素) => 指定したobject要素に変更があった場合に実行

const Name = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleFirstName = (firstName) => {
    setName((name) => ({ ...name, firstName }));
  };

  const handleLastName = (lastName) => {
    setName((name) => ({ ...name, lastName }));
  };

  useEffect(() => {
    console.log('[Name]初回描画、再描画');
  });

  useEffect(() => {
    console.log('[Name]初回描画のみ');
  }, []);

  useEffect(() => {
    console.log('[Name]firstNameのみ更新');
  }, [name.firstName]);

  useEffect(() => {
    console.log('[Name]lastNameのみ更新');
  }, [name.lastName]);

  useEffect(() => {
    console.log('[Name]firstName、lastNameどちらか更新');
  }, [name]);

  return (
    <div>
      <h1>Name</h1>
      <h2>Name：{`${name.firstName} ${name.lastName}`}</h2>
      <div>
        <button onClick={() => handleFirstName('John')}>John</button>
        <button onClick={() => handleLastName('Joe')}>Joe</button>
      </div>
    </div>
  );
};

export default Name;
