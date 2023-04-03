import React from 'react';
import './modal-layout.css';

const ModalLayout = ({ title, modal = false, setModal, children }) => {
  /* Router */
  /* State */
  /* Functions */
  const onModal = () => {
    setModal(false);
  };

  const onStopBubbling = (e) => {
    e.stopPropagation();
  };

  /* Hooks */
  /* Render */
  return (
    modal && (
      <div className="modal-layout-container" onClick={onModal}>
        <div className="modal-box" onClick={onStopBubbling}>
          {title && (
            <div className="header">
              <div className="title">{title}</div>
            </div>
          )}

          <div className="body">{children}</div>
        </div>
      </div>
    )
  );
};

export default ModalLayout;
