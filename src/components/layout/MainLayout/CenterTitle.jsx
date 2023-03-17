import React from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
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
        {back && <IoArrowBackCircle onClick={handleBack} />}
        {title}
      </h1>
    </div>
  );
};

CenterTitle.defaultProps = {
  title: '커뮤니티',
};

export default CenterTitle;
