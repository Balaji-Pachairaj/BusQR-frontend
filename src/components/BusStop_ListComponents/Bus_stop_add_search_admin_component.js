import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_domain, api_endpoints } from "../../APIconfigs/APIs";

const Bus_stop_add_search_admin_component = () => {
  // State for managing the list of strings
  const [stringList, setStringList] = useState([]);
  const [currentString, setCurrentString] = useState("");
  const [bulkInput, setBulkInput] = useState("");

  const [searchparmas, setSearchparams] = useSearchParams();

  // Handler for updating the single string input field
  const handleInputChange = (e) => {
    setCurrentString(e.target.value);
  };

  // Handler for updating the textarea input field
  const handleBulkInputChange = (e) => {
    setBulkInput(e.target.value);
  };

  // Handler for adding a single string to the list
  const handleAddString = () => {
    if (currentString.trim()) {
      setStringList([...stringList, currentString.trim()]);
      setCurrentString(""); // Clear the input field
    }
  };

  // Handler for processing bulk input
  const handleAddBulkStrings = () => {
    const newStrings = bulkInput
      .trim()
      .split(/\s+/) // Split on spaces (or multiple spaces)
      .filter((str) => str !== ""); // Filter out any empty strings
    setStringList([...stringList, ...newStrings]);
    setBulkInput(""); // Clear the textarea
  };

  // Submit handler (optional)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted List:", stringList);

    try {
      let response = await axios.post(
        API_domain?.main_domain + api_endpoints.bus_stop_search_add,
        {
          list: stringList,
          bus_stop: searchparmas.get("_id"),
        }
      );

      //   navigate(
      //     page_routes?.bus_stop_search_add?.direct_link +
      //       "?_id=" +
      //       response?.data?._id
      //   );
    } catch (e) {}
    // Handle the submission logic (e.g., send data to backend)
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        String List Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input for adding a single string */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={currentString}
            onChange={handleInputChange}
            placeholder="Enter a single string"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleAddString}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Textarea for adding bulk strings */}
        <div>
          <textarea
            value={bulkInput}
            onChange={handleBulkInputChange}
            placeholder="Enter multiple strings separated by spaces"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <button
            type="button"
            onClick={handleAddBulkStrings}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Add Bulk Strings
          </button>
        </div>

        {/* Displaying the list */}
        <ul className="list-disc pl-6 space-y-2">
          {stringList.map((str, index) => (
            <li key={index} className="text-gray-700">
              {str}
            </li>
          ))}
        </ul>

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

export default Bus_stop_add_search_admin_component;
