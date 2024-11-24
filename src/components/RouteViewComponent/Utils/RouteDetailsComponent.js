import React from "react";
import { FaBusAlt } from "react-icons/fa";

function getFormattedDateString() {
  const now = new Date();

  // Format the date
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return (
    now.toLocaleDateString("en-US", options) +
    " ⋅ " +
    now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );
}

const RouteDetailsComponent = ({ content = {} }) => {
  return (
    <div className="w-full h-fit flex flex-row justify-center mt-[1rem] ">
      <div className=" w-[90%] h-fit p-[1rem] flex flex-col gap-[0.5rem] border-2 border-[#929292] rounded-[1rem]">
        <h3 className=" text-[14px] font-[500] text-[#929292]">
          {getFormattedDateString()}
        </h3>
        <div className=" w-full flex flex-row items-center gap-[1rem] ">
          <FaBusAlt size={20} color={"black"} />
          <h1 className=" text-[white] text-[14px] bg-theme rounded-[5px] ps-[0.5rem] pe-[0.5rem] pt-1 pb-1">
            Route {content?.route_number}
          </h1>
        </div>
        <div className=" w-full flex flex-row items-center gap-[0.25rem] ">
          <h2 className=" text-[14px] font-[500] text-[#929292]">towards</h2>
          <h1 className=" text-[14px] font-[500] text-theme">
            {content?.last_bus_stop}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RouteDetailsComponent;
