import React from "react";
import { page_routes } from "../../configs/routes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-fit h-ful flex flex-col gapp-[2rem]">
      <div className=" flex gap-[0.5rem]">
        <button
          onClick={() => {
            navigate(page_routes?.bus_stop_list?.direct_link);
          }}
          className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-[2rem] mb-[2rem]"
        >
          List Bus Stop
        </button>
        <button
          onClick={() => {
            navigate(page_routes?.bus_stop_add?.direct_link);
          }}
          className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-[2rem] mb-[2rem]"
        >
          Add Bus Stop
        </button>
        <button
          onClick={() => {
            navigate(page_routes?.bus_stop_search_admin?.direct_link);
          }}
          className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-[2rem] mb-[2rem]"
        >
          Search Bus Stop
        </button>
      </div>
      <div className=" flex gap-[0.5rem]">
        <button
          className="px-4 py-2 bg-purple-500 text-white mb-[2rem] rounded-md hover:bg-purple-600 transition"
          onClick={() => {
            navigate(page_routes.route_list_admin.direct_link);
          }}
        >
          List Route
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white mb-[2rem] rounded-md hover:bg-purple-600 transition"
          onClick={() => {
            navigate(page_routes.route_create_admin.direct_link);
          }}
        >
          Add Route
        </button>
      </div>
    </div>
  );
};

export default HomePage;
