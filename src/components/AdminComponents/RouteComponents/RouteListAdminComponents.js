import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { page_routes } from "../../../configs/routes";

const RouteListAdminComponents = () => {
  let [route, setRoute] = useState([]);

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
          API_domain.main_domain + api_endpoints.route_list,
          obj
        );
        setRoute(resposne?.data);
      } catch (e) {}
    };
    fetch();
  }, []);

  const add_trip_button_click_handler = (id) => {
    console.log(id);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Route List</h1>
      <button
        className="px-4 py-2 bg-purple-500 text-white mb-[2rem] rounded-md hover:bg-purple-600 transition"
        onClick={() => {
          navigate(page_routes.route_create_admin.direct_link);
        }}
      >
        Add Route
      </button>
      <ul className="space-y-4">
        {route.map((item) => (
          <li
            key={item._id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              {/* Route Number and ID */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {item.route_number}
                </h2>
                <p className="text-sm text-gray-500">ID: {item.id}</p>
              </div>

              {/* Counts */}
              <div className="text-right">
                <p className="text-gray-600">
                  <span className="font-bold">From-To:</span>{" "}
                  {item.from_to.length}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">To-From:</span>{" "}
                  {item.to_from.length}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={() => alert(`Edit route: ${item.id}`)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                onClick={() => alert(`View trips for: ${item.id}`)}
              >
                View Trips
              </button>
              <button
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
                onClick={() => {
                  add_trip_button_click_handler(item._id);
                }}
              >
                Add Trip
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteListAdminComponents;
