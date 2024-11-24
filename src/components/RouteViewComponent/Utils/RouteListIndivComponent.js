import React from "react";

const RouteListIndivComponent = ({ content = {}, isLast = false }) => {
  return (
    <div className=" w-full h-fit flex flex-col justify-center items-center ">
      {/* ----------------------- */}
      <div className=" w-[95%] h-fit p-[0.5rem] flex flex-row ">
        {/* -------------- */}
        <div className=" w-[10%] h-fit flex flex-col items-center gap-[0.5rem]  pt-[1vh]  ">
          <div className=" w-[12px] h-[12px] rounded-[50%] bg-[#D9D9D9]"></div>
          <div className="w-[4px] h-[30px] bg-[#D9D9D9] rounded-[2px] "></div>
        </div>
        {/* -------------- */}
        <div className=" w-[70%] h-fit flex flex-col   ">
          <h1 className=" text-[18px] text-[#202123] text-wrap">
            {content?.stop_name}
          </h1>
          <h3 className=" text-[12px] text-[#202123]">{content?.city}</h3>
          <div className=" w-full h-fit flex flex-row justify-start gap-[0.5rem]">
            <h1 className=" text-[white] w-fit text-[8px] bg-theme rounded-[5px] ps-[0.5rem] pe-[0.5rem] pt-1 pb-1">
              {content?.route_number}
            </h1>
            {isLast && (
              <h1 className=" text-[white] w-fit text-[8px] bg-[#C91C1C82] bg-opacity-50 rounded-[5px] ps-[0.5rem] pe-[0.5rem] pt-1 pb-1">
                Last Bus Stop
              </h1>
            )}
          </div>
        </div>
        <div className=" w-[20%] h-fit flex flex-col  items-center pt-[0.3rem]  ">
          <h1 className=" text-[12px] text-[#202123]">{content?.reach_time}</h1>
        </div>
      </div>
      {/* ----------------------- */}
    </div>
  );
};

export default RouteListIndivComponent;
