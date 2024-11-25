import axios from "axios";
import React, { useState } from "react";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";
import { useNavigate } from "react-router-dom";

import { page_routes } from "../../configs/routes";

const Bus_stop_add_bus_Stop = () => {
  const navigate = useNavigate();

  const [busStop, setBusStop] = useState({
    bus_stop_id: "",
    bus_stop_name: "",
    bus_stop_city_name: "",
    bus_stop_location_link: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusStop((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(
        API_domain?.main_domain + api_endpoints?.bus_stop_add,
        busStop
      );

      navigate(
        page_routes?.bus_stop_list?.direct_link + "?_id=" + response?.data?._id
      );
      setSuccessMessage("Bus Stop added successfully!");
      setBusStop({
        bus_stop_id: "",
        bus_stop_name: "",
        bus_stop_city_name: "",
        bus_stop_location_link: "",
      });
    } catch (error) {
      setError("Failed to add bus stop. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Bus Stop</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Bus Stop ID */}
        <div className="mb-4">
          <label
            htmlFor="bus_stop_id"
            className="block text-gray-700 font-medium"
          >
            Bus Stop ID
          </label>
          <input
            type="text"
            id="bus_stop_id"
            name="bus_stop_id"
            value={busStop.bus_stop_id}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bus Stop Name */}
        <div className="mb-4">
          <label
            htmlFor="bus_stop_name"
            className="block text-gray-700 font-medium"
          >
            Bus Stop Name
          </label>
          <input
            type="text"
            id="bus_stop_name"
            name="bus_stop_name"
            value={busStop.bus_stop_name}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bus Stop City Name */}
        <div className="mb-4">
          <label
            htmlFor="bus_stop_city_name"
            className="block text-gray-700 font-medium"
          >
            City Name
          </label>
          <input
            type="text"
            id="bus_stop_city_name"
            name="bus_stop_city_name"
            value={busStop.bus_stop_city_name}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bus Stop Location Link */}
        <div className="mb-4">
          <label
            htmlFor="bus_stop_location_link"
            className="block text-gray-700 font-medium"
          >
            Location Link
          </label>
          <input
            type="text"
            id="bus_stop_location_link"
            name="bus_stop_location_link"
            value={busStop.bus_stop_location_link}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`w-full p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Bus Stop"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bus_stop_add_bus_Stop;
