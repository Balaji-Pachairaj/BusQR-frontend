import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
const routeData = {
  _id: "6749f83f0c32e89be2a88c20",
  id: "route_45c_coimbatore_testing",
  route_number: "45C",
  from_to: [
    {
      _id: "6749fc4e91f98139e1e024bd",
      route_number: "6749f83f0c32e89be2a88c20",
      trip_bus_stop_time_list: ["674a01d1205817c63ea13268"],
      __v: 1,
    },
    {
      _id: "674a1babc86433132e8b0756",
      route_number: "6749f83f0c32e89be2a88c20",
      trip_bus_stop_time_list: [],
      __v: 0,
    },
  ],
  to_from: [
    {
      _id: "674a1bb2c86433132e8b075b",
      route_number: "6749f83f0c32e89be2a88c20",
      trip_bus_stop_time_list: [],
      __v: 0,
    },
  ],
  __v: 3,
};

const TripListAdminComponent = () => {
  const [routeData, setRouteData] = useState({});

  const [searchparmas] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      let obj = {};
      if (searchparmas?.get("_id")) {
        obj = { ...obj, _id: searchparmas?.get("_id") };
      }
      if (searchparmas?.get("id")) {
        obj = { ...obj, id: searchparmas?.get("id") };
      }
      try {
        let response = await axios.post(
          API_domain?.main_domain + api_endpoints.trip_list,
          obj
        );
        setRouteData(response.data);
      } catch (e) {}
    };
    fetch();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Route Details */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Route Details</h2>
        <p className="text-sm text-gray-700">
          <strong>Route Number:</strong> {routeData?.route_number}
        </p>
        <p className="text-sm text-gray-700">
          <strong>ID:</strong> {routeData?.id}
        </p>
        <p className="text-sm text-gray-700">
          <strong>_ID:</strong> {routeData?._id}
        </p>
      </div>

      {/* From To List */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">
          From To List ({routeData?.from_to?.length})
        </h3>
        {routeData?.from_to?.map((item, index) => (
          <div
            key={item._id}
            className="flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg p-4 mb-2"
          >
            <div>
              <p className="text-sm">
                <strong>_ID:</strong> {item._id}
              </p>
              <p className="text-sm">
                <strong>Route Number:</strong> {item.route_number}
              </p>
              <p className="text-sm">
                <strong>Bus Stop Time List:</strong>{" "}
                {item.trip_bus_stop_time_list?.length} stops
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add Bus Stop with Time
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* To From List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          To From List ({routeData?.to_from?.length})
        </h3>
        {routeData?.to_from?.map((item, index) => (
          <div
            key={item._id}
            className="flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg p-4 mb-2"
          >
            <div>
              <p className="text-sm">
                <strong>_ID:</strong> {item._id}
              </p>
              <p className="text-sm">
                <strong>Route Number:</strong> {item.route_number}
              </p>
              <p className="text-sm">
                <strong>Bus Stop Time List:</strong>{" "}
                {item.trip_bus_stop_time_list.length} stops
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add Bus Stop with Time
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripListAdminComponent;
