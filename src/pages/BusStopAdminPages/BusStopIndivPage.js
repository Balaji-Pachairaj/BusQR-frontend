import React, { useState, useEffect } from "react";
import axios from "axios";

let data = {
  _id: "6748bdad5b5698b0143e090b",
  bus_stop_id: "ngp-college-coimbatore",
  bus_stop_name: "NGP College",
  bus_stop_display_name: "Dr. N.G.P. College, Coimbatore",
  bus_stop_location_link: "",
  //   ---------------------------

  list: [
    {
      _id: "674b6562a6cc97adde020968",
      time: 322,
      bus_stop: "6748bdad5b5698b0143e090b",
      trip: {
        _id: "674b654ca6cc97adde02095c",
        route_number: {
          _id: "674a0e3d260c5f8c019ec6bb",
          id: "C45",
          route_number: "route_c45_coimbatore_testing",
          from_to: ["674b654ca6cc97adde02095c"],
          to_from: [],
          __v: 1,
        },
        trip_bus_stop_time_list: [
          {
            _id: "674b6562a6cc97adde020968",
            time: 322,
            bus_stop: {
              _id: "6748bdad5b5698b0143e090b",
              bus_stop_id: "ngp-college-coimbatore",
              bus_stop_name: "NGP College",
              bus_stop_display_name: "Dr. N.G.P. College, Coimbatore",
              bus_stop_location_link: "",
              list: [
                "674afc4619d4420c4b44161a",
                "674b653489bbbf976902d827",
                "674b6562a6cc97adde020968",
              ],
              __v: 5,
            },
            trip: "674b654ca6cc97adde02095c",
            __v: 0,
          },
        ],
        __v: 1,
      },
      __v: 0,
    },
    {
      _id: "674afc4619d4420c4b44161a",
      time: 1045,
      bus_stop: "6748bdad5b5698b0143e090b",
      trip: {
        _id: "6749fc4e91f98139e1e024bd",
        route_number: {
          _id: "6749f83f0c32e89be2a88c20",
          id: "route_45c_coimbatore_testing",
          route_number: "45C",
          from_to: ["6749fc4e91f98139e1e024bd", "674a1babc86433132e8b0756"],
          to_from: ["674a1bb2c86433132e8b075b", "674abdd9502c6f168443e297"],
          __v: 4,
        },
        trip_bus_stop_time_list: [
          {
            _id: "674a01d1205817c63ea13268",
            time: 300,
            bus_stop: {
              _id: "6748bcd08298fc2a9d2ea713",
              bus_stop_id: "kalapatti-coimbatore",
              bus_stop_name: "Kalapatti",
              bus_stop_display_name: "Kalapatti, Coimbatore",
              bus_stop_location_link: "",
              list: ["674a01d1205817c63ea13268", "674af6a26a234e6a1ec6799b"],
              __v: 4,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674af6a26a234e6a1ec6799b",
            time: 325,
            bus_stop: {
              _id: "6748bcd08298fc2a9d2ea713",
              bus_stop_id: "kalapatti-coimbatore",
              bus_stop_name: "Kalapatti",
              bus_stop_display_name: "Kalapatti, Coimbatore",
              bus_stop_location_link: "",
              list: ["674a01d1205817c63ea13268", "674af6a26a234e6a1ec6799b"],
              __v: 4,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674afc4619d4420c4b44161a",
            time: 1045,
            bus_stop: {
              _id: "6748bdad5b5698b0143e090b",
              bus_stop_id: "ngp-college-coimbatore",
              bus_stop_name: "NGP College",
              bus_stop_display_name: "Dr. N.G.P. College, Coimbatore",
              bus_stop_location_link: "",
              list: [
                "674afc4619d4420c4b44161a",
                "674b653489bbbf976902d827",
                "674b6562a6cc97adde020968",
              ],
              __v: 5,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674b653489bbbf976902d827",
            time: 1074,
            bus_stop: {
              _id: "6748bdad5b5698b0143e090b",
              bus_stop_id: "ngp-college-coimbatore",
              bus_stop_name: "NGP College",
              bus_stop_display_name: "Dr. N.G.P. College, Coimbatore",
              bus_stop_location_link: "",
              list: [
                "674afc4619d4420c4b44161a",
                "674b653489bbbf976902d827",
                "674b6562a6cc97adde020968",
              ],
              __v: 5,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674afc3021ee6cbc209fa134",
            time: 1346,
            bus_stop: {
              _id: "6748bde98298fc2a9d2ea757",
              bus_stop_id: "nehru-nagar-coimbatore",
              bus_stop_name: "Nehru Nagar",
              bus_stop_display_name: "Nehru Nagar, Coimbatore",
              bus_stop_location_link: "",
              list: ["674afc3021ee6cbc209fa134"],
              __v: 2,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
        ],
        __v: 5,
      },
      __v: 0,
    },
    {
      _id: "674b653489bbbf976902d827",
      time: 1074,
      bus_stop: "6748bdad5b5698b0143e090b",
      trip: {
        _id: "6749fc4e91f98139e1e024bd",
        route_number: {
          _id: "6749f83f0c32e89be2a88c20",
          id: "route_45c_coimbatore_testing",
          route_number: "45C",
          from_to: ["6749fc4e91f98139e1e024bd", "674a1babc86433132e8b0756"],
          to_from: ["674a1bb2c86433132e8b075b", "674abdd9502c6f168443e297"],
          __v: 4,
        },
        trip_bus_stop_time_list: [
          {
            _id: "674a01d1205817c63ea13268",
            time: 300,
            bus_stop: {
              _id: "6748bcd08298fc2a9d2ea713",
              bus_stop_id: "kalapatti-coimbatore",
              bus_stop_name: "Kalapatti",
              bus_stop_display_name: "Kalapatti, Coimbatore",
              bus_stop_location_link: "",
              list: ["674a01d1205817c63ea13268", "674af6a26a234e6a1ec6799b"],
              __v: 4,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674af6a26a234e6a1ec6799b",
            time: 325,
            bus_stop: {
              _id: "6748bcd08298fc2a9d2ea713",
              bus_stop_id: "kalapatti-coimbatore",
              bus_stop_name: "Kalapatti",
              bus_stop_display_name: "Kalapatti, Coimbatore",
              bus_stop_location_link: "",
              list: ["674a01d1205817c63ea13268", "674af6a26a234e6a1ec6799b"],
              __v: 4,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674afc4619d4420c4b44161a",
            time: 1045,
            bus_stop: {
              _id: "6748bdad5b5698b0143e090b",
              bus_stop_id: "ngp-college-coimbatore",
              bus_stop_name: "NGP College",
              bus_stop_display_name: "Dr. N.G.P. College, Coimbatore",
              bus_stop_location_link: "",
              list: [
                "674afc4619d4420c4b44161a",
                "674b653489bbbf976902d827",
                "674b6562a6cc97adde020968",
              ],
              __v: 5,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674b653489bbbf976902d827",
            time: 1074,
            bus_stop: {
              _id: "6748bdad5b5698b0143e090b",
              bus_stop_id: "ngp-college-coimbatore",
              bus_stop_name: "NGP College",
              bus_stop_display_name: "Dr. N.G.P. College, Coimbatore",
              bus_stop_location_link: "",
              list: [
                "674afc4619d4420c4b44161a",
                "674b653489bbbf976902d827",
                "674b6562a6cc97adde020968",
              ],
              __v: 5,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
          {
            _id: "674afc3021ee6cbc209fa134",
            time: 1346,
            bus_stop: {
              _id: "6748bde98298fc2a9d2ea757",
              bus_stop_id: "nehru-nagar-coimbatore",
              bus_stop_name: "Nehru Nagar",
              bus_stop_display_name: "Nehru Nagar, Coimbatore",
              bus_stop_location_link: "",
              list: ["674afc3021ee6cbc209fa134"],
              __v: 2,
            },
            trip: "6749fc4e91f98139e1e024bd",
            __v: 0,
          },
        ],
        __v: 5,
      },
      __v: 0,
    },
  ],
  __v: 5,
};

function convertMinutesToTime(minutes) {
  // Calculate hours and minutes
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // handle the case where hours = 0 (midnight)

  // Format minutes with leading zero if necessary
  mins = mins < 10 ? "0" + mins : mins;

  // Return the formatted time string
  return `${hours}:${mins} ${period}`;
}

const BusStopIndivPage = () => {
  const [busStopData, setBusStopData] = useState(data);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios
      .get("/api/busstop/6748bdad5b5698b0143e090b")
      .then((response) => {
        setBusStopData(response.data); // Set the fetched data into the state
      })
      .catch((error) => {
        console.error("Error fetching bus stop data:", error);
      });
  }, []);

  if (!busStopData) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        {busStopData.bus_stop_name}
      </h2>
      <p className="text-xl text-gray-600 mb-2">
        {busStopData.bus_stop_display_name}
      </p>
      <p className="text-gray-500 mb-6">
        {busStopData.bus_stop_location_link || "No location provided"}
      </p>

      <div className="space-y-8">
        <h3 className="text-2xl font-medium text-gray-700">Bus List</h3>
        {busStopData.list.map((bus, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-md space-y-4"
          >
            <div className="text-lg font-semibold text-gray-700">
              Trip Time: {convertMinutesToTime(Number(bus.time))}
            </div>
            {/* <p className="text-gray-600">Bus Stop: {bus.bus_stop}</p> */}

            <div className="space-y-2">
              <h5 className="font-medium text-gray-700">Route:</h5>
              <h1 className="list-disc pl-6 space-y-1">
                {bus?.trip.route_number?.route_number}
              </h1>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium text-gray-700">Trip Details:</h5>
              <ul className="list-disc pl-6 space-y-1">
                {bus.trip.trip_bus_stop_time_list.map((stop, idx) => (
                  <li key={idx} className="text-gray-500">
                    Time: {convertMinutesToTime(Number(stop.time))} | Bus Stop:{" "}
                    {stop.bus_stop.bus_stop_name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusStopIndivPage;
