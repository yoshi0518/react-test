import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) => {
  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ width: '50%', padding: '1em', backgroundColor: 'white' }}>
        <div>{children}</div>
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
