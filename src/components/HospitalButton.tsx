import React from 'react';

interface HospitalButtonProps {
  onClick: () => void;
}

const HospitalButton: React.FC<HospitalButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ marginTop: '10px' }}>
      Find Hospitals Around Me
    </button>
  );
};

export default HospitalButton;
