import React from "react";
import IndivBusListComponent from "./Utlis/IndivBusListComponent";

const array = [
  {
    route_number: "90A",
    bus_number: "21b",
    current_bus_stop: {
      time: "9:55 AM",
      name: "SITRA AIRPORT, Coimbatore",
      date: "Nov 20",
      short_name: "SITRA",
    },
    final_destination_stop: {
      time: "10:10 AM",
      date: "Nov 20",
      name: "Hopes College, Coimbatore",
      short_name: "HOPES",
    },
    time: "15 minutes",
  },
  {
    route_number: "12 A",
    bus_number: "87",
    current_bus_stop: {
      time: "9:56 AM",
      name: "SITRA AIRPORT, Coimbatore",
      date: "Nov 20",
      short_name: "SITRA",
    },
    final_destination_stop: {
      time: "10:40 AM",
      date: "Nov 20",
      name: "Gandhipuram bus stand, Coimbatore",
      short_name: "Gandhipuram",
    },
    time: "45 minutes",
  },
  {
    route_number: "15 B",
    bus_number: "87",
    current_bus_stop: {
      time: "10:00 AM",
      name: "SITRA AIRPORT, Coimbatore",
      date: "Nov 20",
      short_name: "SITRA",
    },
    final_destination_stop: {
      time: "10:40 AM",
      date: "Nov 20",
      name: "Ukkadam bus stand, Coimbatore",
      short_name: "Ukkadam",
    },
    time: "40 minutes",
  },
  {
    route_number: "15 B",
    bus_number: "87",
    current_bus_stop: {
      time: "10:10 AM",
      name: "SITRA AIRPORT, Coimbatore",
      date: "Nov 20",
      short_name: "SITRA",
    },
    final_destination_stop: {
      time: "10:50 AM",
      date: "Nov 20",
      name: "Ukkadam bus stand, Coimbatore",
      short_name: "Ukkadam",
    },
    time: "40 minutes",
  },
  {
    route_number: "10 A",
    bus_number: "87",
    current_bus_stop: {
      time: "10:10 AM",
      name: "SITRA AIRPORT, Coimbatore",
      date: "Nov 20",
      short_name: "SITRA",
    },
    final_destination_stop: {
      time: "11:05 AM",
      date: "Nov 20",
      name: "Ukkadam bus stand, Coimbatore",
      short_name: "Ukkadam",
    },
    time: "55 minutes",
  },
];

const BusStopBusesList = () => {
  return (
    <div className=" w-full rounded-t-[8px] border-t-[1px] border-b-[3px] pb-[10vh] rounded-b-[20px] border-gray-500  ">
      {/* ---------------------------- */}
      <div className=" w-full h-[60px] flex flex-row justify-between items-center ps-6 pe-6">
        <h1 className=" text-[#404040] text-[14px] font-bold">
          Upcoming Buses
        </h1>

        <button className=" p-[0.5rem]">
          <p className="text-[#404040] text-[12px] font-bold bg-clip-text bg-main text-transparent">
            View Other Bus Stops
          </p>
        </button>
      </div>
      {/* ---------------------------- */}

      <div className=" w-full h-fit flex flex-col gap-[1rem]">
        {array?.map((item) => {
          return <IndivBusListComponent content={item} />;
        })}
      </div>
    </div>
  );
};

export default BusStopBusesList;
