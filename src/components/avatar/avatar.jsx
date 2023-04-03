import React from 'react';
import './avatar.css';
const avatar = ({ thumbnail, char, style, action, size = 50 }) => {
  /* Router */
  /* State */
  const cc = char.length === 1 ? char : char.slice(0, 1);
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div
      className="avatar"
      style={{ ...style, width: size, height: size }}
      onClick={action}
    >
      {thumbnail ? <img src={thumbnail} alt={char} /> : cc}
    </div>
  );
};

avatar.defaultProps = {
  thumbnail: '',
  char: 'O',
};

export default avatar;
