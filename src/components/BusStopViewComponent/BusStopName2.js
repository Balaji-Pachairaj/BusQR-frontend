import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const BusStopBusesName2 = () => {
  return (
    <div className=" w-full h-[25vh] bg-theme bg-opacity-5  mb-[5vh] flex flex-col justify-end gap-[1rem] pb-[1rem] ">
      <h1 className=" ps-[5%] font-bold text-theme text-[24px] ">
        Current Bus Stop
      </h1>
      <div className=" w-full h-fit flex flex-row justify-center">
        <div className=" w-[90%] min-h-[48px] flex flex-row rounded-[8px] justify-center items-center gap-[0.5rem]  border-gray-500 border-[1px] p-[0.5rem]  text-[12px] text-[#808080] font-bold">
          <FaLocationDot color={"black"} size={18} />
          <p>SITRA BUS STOP, COIMBATORE</p>
        </div>
      </div>
    </div>
  );
};

export default BusStopBusesName2;
