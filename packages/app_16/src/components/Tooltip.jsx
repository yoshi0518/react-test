import { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ children, content, location }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
      {show && <div className={location}>{content}</div>}
    </div>
  );
};

export default Tooltip;
