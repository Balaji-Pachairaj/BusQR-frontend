import React from "react";

const MobileHolderTemplate = ({ children }) => {
  return (
    <div className=" w-full min-h-screen flex flex-row justify-center bg-black">
      <div className=" w-full max-w-[480px]  min-h-screen  bg-white">
        {children}
      </div>
    </div>
  );
};

export default MobileHolderTemplate;
