import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
import { page_routes } from "../../../configs/routes";

const TripCreateAdminComponent = () => {
  const [searchparmas] = useSearchParams();
  const navigate = useNavigate();
  let route_id = searchparmas.get("route_id");
  const [formData, setFormData] = useState({
    route_number: route_id,
    trip_path: "from_to",
    trip_bus_stop_time_list: [],
  });

  const handleTogglePath = () => {
    setFormData((prev) => ({
      ...prev,
      trip_path: prev.trip_path === "from_to" ? "to_from" : "from_to",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      let response = await axios.post(
        API_domain.main_domain + api_endpoints.trip_create,
        {
          trip: {
            ...formData,
          },
          trip_path: formData.trip_path,
        }
      );

      navigate(page_routes.route_list_admin.direct_link + "?_id=" + route_id);
    } catch (e) {}
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Trip Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Route Number Selector */}

        <button
          type="button"
          className={`px-4 py-2 rounded-md shadow-sm text-white ${"bg-blue-500 hover:bg-blue-600"}`}
        >
          {route_id}
        </button>
        {/* Trip Path Toggle */}
        <div className="flex items-center">
          <label
            htmlFor="trip_path"
            className="text-sm font-medium text-gray-700 mr-4"
          >
            Trip Path:
          </label>
          <button
            type="button"
            onClick={handleTogglePath}
            className={`px-4 py-2 rounded-md shadow-sm text-white ${
              formData.trip_path === "from_to"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {formData.trip_path}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TripCreateAdminComponent;
