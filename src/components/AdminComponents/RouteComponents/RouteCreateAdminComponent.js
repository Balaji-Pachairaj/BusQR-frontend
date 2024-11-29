import axios from "axios";
import React, { useState } from "react";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
import { useNavigate } from "react-router-dom";
import { page_routes } from "../../../configs/routes";

const RouteCreateAdminComponent = () => {
  const [formData, setFormData] = useState({
    id: "",
    route_number: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Reset form fields

    try {
      let response = await axios.post(
        API_domain.main_domain + api_endpoints.route_create,
        {
          ...formData,
          from_to: [],
          to_from: [],
        }
      );
      console.log(response?.data);
      navigate(
        page_routes.route_list_admin.direct_link + "?_id=" + response?.data?._id
      );
    } catch (e) {}
    setFormData({ id: "", route_number: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Route Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ID Input */}
        <div>
          <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
            Route ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter Route ID"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Route Number Input */}
        <div>
          <label
            htmlFor="route_number"
            className="block text-gray-700 font-medium mb-2"
          >
            Route Number
          </label>
          <input
            type="text"
            id="route_number"
            name="route_number"
            value={formData.route_number}
            onChange={handleChange}
            placeholder="Enter Route Number"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RouteCreateAdminComponent;
