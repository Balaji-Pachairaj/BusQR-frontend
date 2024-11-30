import React, { useEffect, useState } from "react";
import Bus_stop_search_component from "../../BusStop_ListComponents/Bus_stop_search_component";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { page_routes } from "../../../configs/routes";

const data = {
  _id: "6749fc4e91f98139e1e024bd",
  route_number: {
    _id: "6749f83f0c32e89be2a88c20",
    id: "route_45c_coimbatore_testing",
    route_number: "45C",
    from_to: ["6749fc4e91f98139e1e024bd", "674a1babc86433132e8b0756"],
    to_from: ["674a1bb2c86433132e8b075b", "674abdd9502c6f168443e297"],
    __v: 4,
  },
  trip_bus_stop_time_list: ["674a01d1205817c63ea13268"],
  __v: 1,
};

const BusStopCard = ({ busStop }) => {
  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center mb-[1rem ]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        {/* Bus Stop Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {busStop?.bus_stop_name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Display Name:{" "}
          <span className="font-medium text-gray-800">
            {busStop?.bus_stop_display_name}
          </span>
        </p>

        {/* Location Link */}
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Location Link:</span>{" "}
          {busStop?.bus_stop_location_link ? (
            <a
              href={busStop?.bus_stop_location_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              View Location
            </a>
          ) : (
            "Not Provided"
          )}
        </p>

        {/* Bus Stop ID */}
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Bus Stop ID:</span>{" "}
          {busStop?.bus_stop_id}
        </p>

        {/* List Length */}
        <p className="text-gray-600 mb-4">
          <span className="font-medium">List Length:</span>{" "}
          {busStop?.list?.length}
        </p>

        {/* ID */}
        <p className="text-gray-600">
          <span className="font-medium">Unique ID:</span> {busStop?._id}
        </p>
      </div>
    </div>
  );
};

const TripBusStopTimeCreateAdminComponent = () => {
  const [data, setData] = useState({});

  const [searchparmas] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      let obj = {};
      if (searchparmas?.get("_id")) {
        obj = { ...obj, _id: searchparmas?.get("_id") };
      }
      if (!searchparmas?.get("_id")) {
        return;
      }
      try {
        let resposne = await axios.post(
          API_domain.main_domain + api_endpoints.trip_indivlist,
          obj
        );
        setData(resposne?.data);
      } catch (e) {}
    };
    fetch();
  }, []);

  // -----------------------------------
  const [time, setTime] = useState("");
  const [minutesFromStart, setMinutesFromStart] = useState(null);

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);

    // Calculate minutes from the start of the day
    const [hours, minutes] = selectedTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    setMinutesFromStart(totalMinutes);
  };

  //   --------- bus search

  const [query, setQuery] = useState("");

  const [list, setList] = useState([]);

  const [picked_busstop, setPickedBusstop] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        let response = await axios.get(
          API_domain?.main_domain +
            api_endpoints?.bus_search_predictor +
            "?text=" +
            query
        );

        setList(response?.data?.Bus_Stops_array);
      } catch (e) {}
    };
    if (query.length > 2) {
      fetch();
    } else {
      setList([]);
    }
  }, [query]);

  const updatePickedBus = (obj) => {
    setPickedBusstop(obj);
    setList([]);
    setQuery("");
  };

  // ------------------------

  const submit_handler = async () => {
    console.log({
      picked_busstop,
      minutesFromStart,
      data,
    });

    try {
      let response = await axios.post(
        API_domain.main_domain + api_endpoints.trip_bus_stop_time_create,
        {
          bus_stop: picked_busstop?._id,
          time: minutesFromStart,
          trip: data?._id,
        }
      );

      console.log(response?.data);
      navigate(
        page_routes.tripbusstoptime_list.direct_link + "?_id=" + data?._id
      );
    } catch (e) {}
  };
  return (
    <>
      <div className="p-6 bg-gray-100 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
          {/* ID */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Route Details</h2>
            <p className="text-sm text-gray-600">
              <strong>_ID:</strong> {data?._id}
            </p>
          </div>

          {/* Route Number Details */}
          <div className="mb-4 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Route Number: {data?.route_number?.route_number}
            </h3>
            <p className="text-sm text-gray-600">
              <strong>Route ID:</strong> {data?.route_number?.id}
            </p>
            <p className="text-sm text-gray-600">
              <strong>From To:</strong> {data?.route_number?.from_to?.length}{" "}
              stops
            </p>
            <p className="text-sm text-gray-600">
              <strong>To From:</strong> {data?.route_number?.to_from?.length}{" "}
              stops
            </p>
          </div>

          {/* Trip Bus Stop Time List */}
          <div className="mt-4 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Trip Bus Stop Time List
            </h3>
            <p className="text-sm text-gray-600">
              <strong>Total Stops:</strong>{" "}
              {data?.trip_bus_stop_time_list?.length} stops
            </p>
          </div>
        </div>
      </div>
      {/* -------------- */}

      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Search Bus Stops
        </h1>
        <button
          onClick={() => {
            navigate(page_routes?.bus_stop_add?.direct_link);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded mb-[0.5rem] hover:bg-green-600"
        >
          Create Bus Stop
        </button>

        <input
          type="text"
          placeholder="Search bus stops..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <ul className="mt-4 space-y-2">
          {list.map((stop) => (
            <button
              onClick={() => {
                updatePickedBus(stop);
              }}
              key={stop.id}
              className="p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition"
            >
              {stop.bus_stop_display_name}
            </button>
          ))}
          {list.length === 0 && (
            <li className="text-gray-500">No bus stops found.</li>
          )}
        </ul>
        <BusStopCard busStop={picked_busstop} />
      </div>
      {/* -------------- */}

      <div className="p-6 bg-gray-100 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Time Picker Form
          </h2>

          {/* Time Picker Input */}
          <div className="mb-4">
            <label
              htmlFor="timePicker"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Time:
            </label>
            <input
              type="time"
              id="timePicker"
              value={time}
              onChange={handleTimeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Display Minutes from Start of the Day */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">
              Minutes from Start of Day:
            </h3>
            {minutesFromStart !== null ? (
              <p className="text-gray-600 mt-2">{minutesFromStart} minutes</p>
            ) : (
              <p className="text-gray-400 mt-2">No time selected</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={() => {
              submit_handler();
            }}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default TripBusStopTimeCreateAdminComponent;
