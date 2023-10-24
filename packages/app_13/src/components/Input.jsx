import { useState, useRef } from 'react';

const Input = () => {
  const [name, setName] = useState('');
  const handleOnChange = (e) => setName(e.target.value);

  const inputEl = useRef(null);
  const handleOnClick = () => {
    console.log({ inputEl, boundingClientRect: inputEl.current.getBoundingClientRect() });
    inputEl.current.style.color === 'red' ? (inputEl.current.style.color = '') : (inputEl.current.style.color = 'red');
    inputEl.current.focus();
  };

  return (
    <>
      <div>
        名前：
        <input value={name} onChange={handleOnChange} ref={inputEl} />
      </div>
      <div>入力内容：{name}</div>
      <div>
        <button onClick={handleOnClick}>フォーカスを当てる</button>
      </div>
    </>
  );
};

export default Input;
