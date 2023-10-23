import { useState } from 'react';
import './App.css';

const Modal = ({ show, setShow, children }) => {
  const closeModal = () => setShow((show) => !show);

  return show ? (
    <div id="overlay" onClick={closeModal}>
      <div id="content" onClick={(e) => e.stopPropagation()}>
        {children}
        <p>
          <button onClick={closeModal}>close</button>
        </p>
      </div>
    </div>
  ) : null;
};

const App = () => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow((show) => !show);

  return (
    <>
      <button onClick={openModal}>Click</button>
      <Modal show={show} setShow={setShow}>
        <h1>Title</h1>
        <p>あいうえお</p>
        <p>かきくけこ</p>
      </Modal>
    </>
  );
};

export default App;
