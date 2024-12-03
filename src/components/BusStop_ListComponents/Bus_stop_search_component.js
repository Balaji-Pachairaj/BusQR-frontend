import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";
import { useNavigate } from "react-router-dom";
import { page_routes } from "../../configs/routes";

const Bus_stop_search_component = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        let response = await axios.get(
          API_domain?.main_domain +
            api_endpoints?.bus_search_predictor +
            "?text=" +
            query
        );
        console.log(response?.data);
        setList(response?.data?.Bus_Stops_array);
      } catch (e) {}
    };
    if (query.length > 2) {
      fetch();
    } else {
      setList([]);
    }
  }, [query]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Search Bus Stops
      </h1>
      <input
        type="text"
        placeholder="Search bus stops..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <ul className="mt-4 space-y-2">
        {list.map((stop) => (
          <li
            key={stop.id}
            className="p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition"
          >
            {stop.bus_stop_display_name}
          </li>
        ))}
        {list.length === 0 && (
          <li className="text-gray-500">No bus stops found.</li>
        )}
      </ul>

      <button
        onClick={() => {
          navigate(page_routes?.bus_stop_add?.direct_link);
        }}
        className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-[2rem] mb-[2rem]"
      >
        Add Bus Stop
      </button>
    </div>
  );
};

export default Bus_stop_search_component;
