import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";

const busStops = [
  { id: 1, displayName: "Kalapatti, Coimbatore" },
  { id: 2, displayName: "Lakshmi Technology, Coimbatore" },
  { id: 3, displayName: "KMCH College of Pharmacy, Coimbatore" },
  { id: 4, displayName: "Dr. N.G.P. College, Coimbatore" },
  { id: 5, displayName: "Periyar Nagar, Coimbatore" },
  { id: 6, displayName: "Nehru Nagar, Coimbatore" },
  { id: 7, displayName: "SITRA Airport, Coimbatore" },
  { id: 8, displayName: "Arvind Eye Hospital, Coimbatore" },
  { id: 9, displayName: "Codissia Trade Fair Complex, Coimbatore" },
  { id: 10, displayName: "Hope College, Coimbatore" },
  { id: 11, displayName: "Fun Republic Mall, Coimbatore" },
  { id: 12, displayName: "Sri G.V.G. Krishnamal College, Coimbatore" },
  { id: 13, displayName: "P.S.G. Tech, Peelamedu, Coimbatore" },
];

const Bus_stop_search_component = () => {
  const [query, setQuery] = useState("");

  const [list, setList] = useState([]);

  const filteredBusStops = busStops.filter((stop) =>
    stop.displayName.toLowerCase().includes(query.toLowerCase())
  );

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
        {filteredBusStops.length === 0 && (
          <li className="text-gray-500">No bus stops found.</li>
        )}
      </ul>
    </div>
  );
};

export default Bus_stop_search_component;
