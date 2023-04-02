import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CenterTitle = ({ title, back }) => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  /* Functions */
  const handleBack = () => {
    navigate(-1);
  };

  /* Hooks */
  /* Render */
  return (
    <div className="center-title">
      <h1>
        {back && (
          <>
            <BsArrowLeft onClick={handleBack} style={{ cursor: 'pointer' }} />
            &nbsp;
          </>
        )}
        {title}
      </h1>
    </div>
  );
};

CenterTitle.defaultProps = {
  title: '커뮤니티',
};

export default CenterTitle;
