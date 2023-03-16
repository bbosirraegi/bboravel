import React from 'react';

const Tag = ({ title, action }) => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div
      style={{
        width: 'auto',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 3%',
        margin: '0.5%',
        borderRadius: 20,
        backgroundColor: 'rgba(248, 247, 247)',
        color: 'rgba(146, 151, 156)',
        fontSize: '0.75rem',
        cursor: 'pointer',
      }}
    >
      {title}
    </div>
  );
};

export default Tag;
