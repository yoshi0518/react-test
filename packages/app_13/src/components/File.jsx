import { useRef } from 'react';

const File = () => {
  const inputEl = useRef(null);
  const selectedFile = (e) => console.log(e.target.files);

  return (
    <>
      <h2>通常版</h2>
      <input type="file" ref={inputEl} onChange={selectedFile} />

      <h2>カスタマイズ版</h2>
      <button onClick={() => inputEl.current.click()}>File Select</button>
    </>
  );
};

export default File;
