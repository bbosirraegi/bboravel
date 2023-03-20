import React from 'react';

const MAX_IMG = 4;

const Album = ({ album }) => {
  /* Router */
  /* State */
  const w = album.length % MAX_IMG;
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className={`album${w !== 0 ? `-${w}` : ''}`}>
      {album.map((item) => {
        return <img key={item} src={item} alt="1" />;
      })}
    </div>
  );
};

export default Album;
