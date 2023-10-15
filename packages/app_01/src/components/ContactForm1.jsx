import { useState } from 'react';

const ContactForm1 = () => {
  console.log('再描画：ContactForm1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2em' }}>
      <h1>useStateでフォーム1</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>メールアドレス：</label>
          <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>パスワード：</label>
          <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm1;
