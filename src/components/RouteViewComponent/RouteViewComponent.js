import React from "react";
import MobileHolderTemplate from "../../templates/MobileHolderTemplate";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import RouteDetailsComponent from "./Utils/RouteDetailsComponent";
import RouteListingComponent from "./RouteListingComponent";

const content = {
  route_number: "16B",
  last_bus_stop: "Saibaba Colony",
};

const RouteViewComponent = () => {
  return (
    <MobileHolderTemplate>
      <div className=" w-full h-full flex flex-col pt-[5vh] font-inter">
        {/* ------------------------- */}
        <div className=" w-full h-fit flex flex-row justify-between items-center ps-3 pe-3">
          <button className=" flex flex-row gap-[0.5rem] items-center pt-[0.5rem] pb-[0.5rem] text-theme font-[600] text-[24px]">
            <IoChevronBackSharp size={24} color={"blue"} />
            <p>Route {content?.route_number} Stops</p>
          </button>
          <span>
            <FaBusAlt size={24} color={"black"} />
          </span>
        </div>
        {/* ------------------------- */}

        <RouteDetailsComponent content={content} />

        <RouteListingComponent />
      </div>
    </MobileHolderTemplate>
  );
};

export default RouteViewComponent;
