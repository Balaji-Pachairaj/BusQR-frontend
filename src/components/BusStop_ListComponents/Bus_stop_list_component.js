import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";
import { useSearchParams } from "react-router-dom";

const Bus_stop_list_component = () => {
  const [list, setList] = useState([]);

  const [searchparmas, setSearchparams] = useSearchParams();

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

  return (
    <div className="max-w-4xl mx-auto mt-10 pb-[10vh]">
      <h1 className="text-2xl font-bold mb-4 text-center">Bus Stops List</h1>
      <ul className="space-y-4 flex flex-col items-center">
        {list.map((stop) => (
          <li
            key={stop._id}
            className="bg-white p-4 mx-w-[500px] w-[90%] rounded-lg shadow-xl hover:shadow-2xl transition font-poppins"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {stop.bus_stop_name}
            </h3>

            <p className="text-gray-600">_id: {stop._id}</p>
            <p className="text-gray-600">Bus Stop ID: {stop.bus_stop_id}</p>
            <p className="text-gray-600">City: {stop.bus_stop_city_name}</p>
            <p className="text-gray-500">
              Location: {stop.bus_stop_location_link || "Not provided"}
            </p>
            {/* <div>
              <strong>Bus List:</strong>
              <ul className="text-gray-500 list-disc pl-5">
                {stop.bus_list.length > 0 ? (
                  stop.bus_list.map((bus, index) => <li key={index}>{bus}</li>)
                ) : (
                  <li>No buses available</li>
                )}
              </ul>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bus_stop_list_component;
