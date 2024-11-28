import axios from "axios";
import React, { useState } from "react";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";
import { useNavigate } from "react-router-dom";

import { page_routes } from "../../configs/routes";

const Bus_stop_add_bus_Stop = () => {
  const navigate = useNavigate();
  // State to manage form data
  const [formData, setFormData] = useState({
    bus_stop_id: "",
    bus_stop_name: "",
    bus_stop_display_name: "",
    bus_stop_location_link: "",
    list: [],
    bus_stop_search_list: [],
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handlers for dynamic arrays
  const handleAddToList = () => {
    setFormData({
      ...formData,
      list: [...formData.list, ""],
    });
  };

  const handleListChange = (index, value) => {
    const updatedList = [...formData.list];
    updatedList[index] = value;
    setFormData({ ...formData, list: updatedList });
  };

  const handleAddToSearchList = () => {
    setFormData({
      ...formData,
      bus_stop_search_list: [...formData.bus_stop_search_list, ""],
    });
  };

  const handleSearchListChange = (index, value) => {
    const updatedSearchList = [...formData.bus_stop_search_list];
    updatedSearchList[index] = value;
    setFormData({ ...formData, bus_stop_search_list: updatedSearchList });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      let response = await axios.post(
        API_domain?.main_domain + api_endpoints.bus_stop_add,
        formData
      );
      navigate(
        page_routes?.bus_stop_search_add?.direct_link +
          "?_id=" +
          response?.data?._id
      );
    } catch (e) {}
    // Perform form submission logic
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Bus Stop Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Bus Stop ID
          </label>
          <input
            type="text"
            name="bus_stop_id"
            value={formData.bus_stop_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bus stop ID"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Bus Stop Name
          </label>
          <input
            type="text"
            name="bus_stop_name"
            value={formData.bus_stop_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bus stop name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Bus Stop Display Name
          </label>
          <input
            type="text"
            name="bus_stop_display_name"
            value={formData.bus_stop_display_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter display name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Bus Stop Location Link
          </label>
          <input
            type="text"
            name="bus_stop_location_link"
            value={formData.bus_stop_location_link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location link"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Bus_stop_add_bus_Stop;
