import React from "react";
import { FaLocationDot } from "react-icons/fa6";

import { FaBusAlt } from "react-icons/fa";

const BusStopName = () => {
  return (
    <div className="w-full h-[100px] relative ">
      {/* -------------- */}
      <div className=" w-[90%] h-fit rounded-[8px] shadow-xl p-[1rem] bg-white absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[1rem]">
        {/* ----------- */}
        <div className=" w-[90%] h-[48px] flex flex-row rounded-[8px] justify-center items-center gap-[0.5rem] bg-main p-[0.5rem]  text-[14px] text-white">
          <FaBusAlt size={18} /> Bus Stop
        </div>
        {/* ---------- */}
        <div className=" w-[90%] min-h-[48px] flex flex-row rounded-[8px] justify-center items-center gap-[0.5rem]  border-gray-500 border-[1px] p-[0.5rem]  text-[12px] text-black font-bold">
          <FaLocationDot color={"black"} size={18} />
          <p>SITRA BUS STOP, COIMBATORE</p>
        </div>
      </div>
      {/* -------------- */}
    </div>
  );
};

export default BusStopName;
