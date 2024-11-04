import React from 'react';

const Header = () => {
  return (
    <div className="h-[88px] bg-[#A29875] flex items-center px-6">
      <h1 
        className="text-[44px] text-white" 
        style={{ fontFamily: 'Libre Bodoni' }} // Corrected inline style syntax
      >
        MANZZARI
      </h1>
    </div>
  );
};

export default Header;
