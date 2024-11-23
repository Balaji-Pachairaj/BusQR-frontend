import React from "react";
import MobileHolderTemplate from "../../templates/MobileHolderTemplate";

import BusStopName from "./BusStopName";
import BusStopBusesList from "./BusStopBusesList";
import BusStopBusesName2 from "./BusStopName2";

const BusStopViewComponent = () => {
  return (
    <MobileHolderTemplate>
      <div className=" w-full h-fit font-inter">
        {/* <div className=" w-full h-[25vh] bg-main "> </div>
        <BusStopName /> */}

        {/* -------------- */}
        <BusStopBusesName2 />
        <BusStopBusesList />
        {/* -------------- */}

        <div className=" w-full h-screen"></div>
      </div>
    </MobileHolderTemplate>
  );
};

export default BusStopViewComponent;
