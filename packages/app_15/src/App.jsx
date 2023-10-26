import { useState, useEffect } from 'react';

import Portal from './components/Portal';
import Modal from './components/Modal';

const App = () => {
  const [showPortal, setShowPortal] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [domReady, setDomReady] = useState(false);

  const closeModal = () => setShowModal((showModal) => !showModal);

  useEffect(() => {
    setDomReady(true);
  });

  return (
    <>
      {showPortal && domReady && (
        <Portal>
          <div>
            <h1>Hello Portals</h1>
            <p>text text text text text</p>
          </div>
        </Portal>
      )}

      {showModal && domReady && <Modal closeModal={closeModal}>モーダルウィンドウの作成</Modal>}

      <div>
        <button onClick={() => setShowModal((showModal) => !showModal)}>Open</button>
      </div>

      <div>
        <button onClick={() => setShowPortal((showPortal) => !showPortal)}>Toggle</button>
      </div>
      <p>初めてのReact Portal設定</p>

      <div id="portal"></div>
    </>
  );
};

export default App;
