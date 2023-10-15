import { useState } from 'react';

const ContactForm2 = () => {
  console.log('再描画：ContactForm2');
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSend = (e) => {
    e.preventDefault();
    console.log({ form });
  };

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2em' }}>
      <h1>useStateでフォーム2</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>メールアドレス：</label>
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label>パスワード：</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm2;
