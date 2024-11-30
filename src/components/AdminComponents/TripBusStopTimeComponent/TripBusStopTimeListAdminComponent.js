import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
import axios from "axios";
import { page_routes } from "../../../configs/routes";

const TripBusStopTimeListAdminComponent = () => {
  const [tripDetails, setTripDetails] = useState();

  const [searchparmas] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      let obj = {};
      if (searchparmas?.get("_id")) {
        obj = { ...obj, _id: searchparmas?.get("_id") };
      }

      try {
        let resposne = await axios.post(
          API_domain.main_domain + api_endpoints.trip_bus_stop_time_list,
          obj
        );
        setTripDetails(resposne?.data);
      } catch (e) {}
    };
    fetch();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6">
        {/* Trip Information */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Trip ID: {tripDetails?._id}
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Route Number: {tripDetails?.route_number?.route_number}
          </h3>
          <p className="text-gray-600">
            Route ID:{" "}
            <span className="font-medium">{tripDetails?.route_number?.id}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">From-To Count:</span>{" "}
            {tripDetails?.route_number?.from_to?.length}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">To-From Count:</span>{" "}
            {tripDetails?.route_number?.to_from?.length}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mb-6">
          <button
            onClick={() => {
              navigate(
                page_routes?.tripbusstoptime_create?.direct_link +
                  "?_id=" +
                  tripDetails?._id
              );
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Bus Stop
          </button>
          <button
            onClick={() => {
              navigate(page_routes?.bus_stop_add?.direct_link);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create Bus Stop
          </button>
          {/* <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Other Action
          </button> */}
        </div>

        {/* Trip Bus Stop Time List */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Trip Bus Stop Time List{" "}
            <h4>length : {tripDetails?.trip_bus_stop_time_list?.length}</h4>
          </h3>

          {tripDetails?.trip_bus_stop_time_list?.map((stop) => (
            <div
              key={stop?._id}
              className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm border"
            >
              {/* Time and Bus Stop ID */}
              <p className="text-gray-800 font-bold text-lg mb-2">
                <span className="text-gray-500 text-sm">
                  (Time in minutes: {stop?.time})
                </span>
              </p>
              {/* Bus Stop Details */}
              <p className="text-gray-600 mb-1">
                Bus Stop ID:{" "}
                <span className="font-medium">
                  {stop?.bus_stop?.bus_stop_id}
                </span>
              </p>
              <p className="text-gray-600 mb-1">
                Bus Stop Name:{" "}
                <span className="font-medium">
                  {stop?.bus_stop?.bus_stop_name}
                </span>
              </p>
              <p className="text-gray-600 mb-1">
                Display Name:{" "}
                <span className="font-medium">
                  {stop?.bus_stop?.bus_stop_display_name}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Search List Count:</span>{" "}
                {stop?.bus_stop?.bus_stop_search_list?.length}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">List Count:</span>{" "}
                {stop?.bus_stop?.list?.length}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripBusStopTimeListAdminComponent;
