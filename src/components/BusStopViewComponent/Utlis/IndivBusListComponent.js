import React from "react";

import { FaBusAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const IndivBusListComponent = ({ content = {} }) => {
  return (
    <div className=" w-full h-fit ps-3 pe-3">
      {/* ------------------------------- */}
      <div className=" w-full h-fit p-[0.5rem] flex flex-col gap-[0.5rem]  rounded-[8px]  border-2  border-gray-500">
        {/* ------------------------------- */}
        <div className=" w-full h-fit flex flex-row justify-between">
          {/* --- */}
          <div className=" w-fit flex flex-row items-center flex-wrap gap-[0.5rem]">
            <FaBusAlt color={"black"} size={18} />
            {/* <h1 className="ps-[0.5rem] pe-[0.5rem]  bg-theme rounded-[10px] pt-1 pb-1 font-bold text-[10px] text-white">
              {content?.bus_number}
            </h1> */}
            <h1 className=" ps-[0.5rem] pe-[0.5rem] bg-theme rounded-[9px] pt-1 pb-1 font-bold text-[10px] text-white">
              Route {content?.route_number}
            </h1>
            <button className="  pt-1 pb-1 font-bold text-[12px] text-white">
              <IoIosArrowForward color={"black"} size={12} />
            </button>
          </div>
          {/* --- */}
          <div className=" w-fit flex flex-row items-center gap-[0.5rem]">
            <button className=" p-[0.5rem]">
              <p className="text-[#404040] text-[10px] font-bold bg-clip-text  bg-theme text-transparent">
                View full Schedule
              </p>
            </button>
          </div>
          {/* --- */}
        </div>
        {/* ---------------------- */}
        <div className=" w-full h-fit flex flex-col gap-[0rem] ">
          <h2 className=" text-[#857D7D] text-[10px] flex flex-row gap-[0.2rem] flex-wrap">
            <p className=" uppercase">{content?.current_bus_stop?.time}</p> -
            will arrive at
            <p className=" uppercase">
              {content?.current_bus_stop?.short_name}
            </p>
          </h2>
          <h2 className=" text-[#857D7D] text-[10px] flex flex-row gap-[0.2rem] flex-wrap">
            <p className=" uppercase">
              {content?.final_destination_stop?.time}
            </p>{" "}
            - will arrive at
            <p className=" uppercase">
              {content?.final_destination_stop?.short_name}
            </p>
          </h2>
        </div>
        {/* ---------------------- */}

        <div className=" w-full  flex flex-row justify-between ">
          {/* ------------------------- */}
          <div className=" w-[30%] overflow-hidden flex flex-row justify-start   text-wrap">
            {/* ------------------------- */}
            <div className=" ps-1 pe-2 ">
              {/* ------------------------- */}
              <h1 className=" text-[12px] text-[#202020]">
                {content?.current_bus_stop?.time}
              </h1>
              {/* ------------------------- */}
              <h2 className=" text-[10px] text-[#808080BF]">
                {content?.current_bus_stop?.date}
              </h2>
              {/* ------------------------- */}
              <p className=" text-[10px] text-[black]">
                {content?.current_bus_stop?.name}
              </p>
              {/* ------------------------- */}
            </div>
            {/* ------------------------- */}
          </div>
          {/* ------------------------- */}
          {/* ------------------ */}
          <div className="w-[40%] flex-1 flex flex-col justify-center items-center">
            <div className=" relative w-[90%] h-fit border-b-[1px] border-[#808080BF] flex flex-row justify-center text-[8px]">
              {/* ------------- */}
              <h1 className="  text-[8px] text-[#808080BF]">{content?.time}</h1>
              {/* ------------- */}
              <div className=" w-[4px] h-[4px] rounded-[50%] bg-[#808080BF] absolute bottom-[-2px] right-[-4px]"></div>
              <div className=" w-[4px] h-[4px] rounded-[50%] bg-[#808080BF] absolute bottom-[-2px] left-[-4px]"></div>
            </div>
            {/* ------------- */}
          </div>
          {/* ------------------ */}
          <div className=" w-[30%] overflow-hidden flex flex-row justify-end   text-wrap">
            <div className=" ps-1 pe-1  flex flex-col items-end ">
              <h1 className=" text-[12px] text-[#202020] ">
                {content?.final_destination_stop?.time}
              </h1>
              <h2 className=" text-[10px] text-[#808080BF]">
                {content?.final_destination_stop?.date}
              </h2>
              <p className=" text-[10px] text-[black] text-end">
                {content?.final_destination_stop?.name}
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
      </div>
      {/* ------------------------------- */}
    </div>
  );
};

export default IndivBusListComponent;
