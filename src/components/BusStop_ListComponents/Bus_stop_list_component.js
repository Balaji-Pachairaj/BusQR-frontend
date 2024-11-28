import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { page_routes } from "../../configs/routes";

const Bus_stop_list_component = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const [searchparmas] = useSearchParams();

  useEffect(() => {
    let obj = {};
    if (searchparmas?.get("_id")) {
      obj = { ...obj, _id: searchparmas?.get("_id") };
    }

    const fetch = async () => {
      try {
        let list = await axios.post(
          API_domain?.main_domain + api_endpoints?.bus_stop_list,
          obj
        );
        setList(list?.data);
      } catch (e) {}
    };
    fetch();
  }, []);

  const handleAddSearchParams = (busStopId) => {
    navigate(
      page_routes?.bus_stop_search_add?.direct_link + "?_id=" + busStopId
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Bus Stop Information
      </h1>
      <div className="space-y-6">
        {list.map((busStop, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow-sm bg-gray-50"
          >
            {/* Display bus stop details */}
            {Object.keys(busStop).map((key) => {
              if (key === "list") return null; // Ignore the 'list' key
              return (
                <div key={key} className="mb-2">
                  <span className="font-semibold text-gray-700 capitalize">
                    {key.replace(/_/g, " ")}:
                  </span>{" "}
                  {key === "bus_stop_search_list" ? (
                    <span>{busStop[key].length} items</span> // Show length of bus_stop_search_list
                  ) : (
                    <span>{busStop[key]}</span>
                  )}
                </div>
              );
            })}

            {/* Add Search Params Button */}
            <button
              onClick={() => handleAddSearchParams(busStop._id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Search Params
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bus_stop_list_component;
