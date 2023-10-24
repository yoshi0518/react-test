import { useRef } from 'react';

const FormRef = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email：${emailRef.current.value} password：${passwordRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email2">Email：</label>
          <input id="email2" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password2">Password：</label>
          <input type="password2" id="password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </>
  );
};

export default FormRef;
