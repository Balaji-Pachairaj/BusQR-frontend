import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_domain, api_endpoints } from "../../../APIconfigs/APIs";
import axios from "axios";

function isSubstring(str2, str1) {
  // Check if str1 is p*resent in str2
  return str2
    ?.toString()
    ?.toLowerCase()
    ?.includes(str1?.toString()?.toLowerCase());
}

const sort_the_list = (busList, inputValue) => {
  let array = [];
  if (busList?.length <= 0) {
    return [];
  }

  if (inputValue === "") {
    return [];
  }

  for (let i = 0; i < busList?.length; i++) {
    if (isSubstring(busList[i]?.busSearchList, inputValue)) {
      array.push(busList[i]);
    }
  }

  return array;
};

const ConnectComponent = () => {
  let [busStopList, setBusStopList] = useState([]);

  const [firstQuery, setfirstQuery] = useState({
    _id: "",
    display_name: "",
  });
  const firstInputRef = useRef();
  const [firstlist, setFirstList] = useState([]);

  const [secondQuery, setsecondQuery] = useState({
    _id: "",
    display_name: "",
  });
  const secondInputRef = useRef();
  const [secondlist, setsecondList] = useState([]);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        let response = await axios.post(
          API_domain.main_domain + api_endpoints.bus_stop_list_search,
          {}
        );

        let array = [];
        for (let i = 0; i < response?.data?.busStopList?.length; i++) {
          let obj = { ...response?.data?.busStopList[i] };
          let string = "";
          for (let j = 0; j < obj?.bus_stop_search_list?.length; j++) {
            string = string + " " + obj?.bus_stop_search_list[j].text;
          }
          obj.busSearchList = string;
          array.push(obj);
        }
        setBusStopList(array);
      } catch (e) {}
    };
    fetchlist();

    if (firstInputRef?.current) {
      firstInputRef?.current?.focus();
    }
    return () => {};
  }, []);

  const firstQueryOnchange = async (e) => {
    setfirstQuery({
      _id: "",
      display_name: e.target.value,
    });
    let array = sort_the_list(busStopList, e.target.value);
    setFirstList(array);
  };

  const secondQueryOnchange = async (e) => {
    setsecondQuery({
      _id: "",
      display_name: e.target.value,
    });
    let array = sort_the_list(busStopList, e.target.value);

    setsecondList(array);
  };

  return (
    <div className=" w-full h-screen flex flex-row justify-center items-center">
      <div className=" flex flex-col items-start  w-full gap-[3rem]   ">
        <div className=" w-full h-fit flex  flex-row justify-center">
          <h1 className=" font-poppins text-[18px]">
            Connect Any Two Places on Coimbatore
          </h1>
        </div>

        {/* ------------------------- */}

        <div className=" w-full justify-center flex flex-row gap-[4rem]">
          <div className="p-4 ">
            <h1 className=" text-[14px] text-gray-800">From :</h1>
            <div className=" w-[300px] h-[40px] relative">
              <input
                type="text"
                placeholder="Search bus stops..."
                value={firstQuery?.display_name}
                ref={firstInputRef}
                onFocus={() => {
                  if (firstInputRef?.current) {
                    firstInputRef?.current?.select();
                  }
                }}
                onChange={(e) => {
                  firstQueryOnchange(e);
                }}
                className="w-full h-full p-2 border border-none focus:outline-none text-[12px] rounded-md shadow-sm focus:ring-[1px] focus:ring-blue-500 "
              />
              <div className=" w-full absolute z-[500] h-fit max-h-[200px] overflow-auto">
                <ul className="flex flex-col pt-4 ">
                  {firstlist.map((stop) => (
                    <button
                      onClick={() => {
                        setfirstQuery({
                          _id: stop?._id,
                          display_name: stop.bus_stop_display_name,
                        });
                        setFirstList([]);
                      }}
                      key={stop.id}
                      className="p-2 bg-gray-100 rounded-md text-[10px] shadow-sm text-start hover:bg-gray-200 transition"
                    >
                      {stop.bus_stop_display_name}
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* ------------------------- */}
          <div className="p-4">
            <h1 className="text-[14px] text-gray-800">To :</h1>
            <div className=" w-[300px] h-[40px] relative">
              <input
                type="text"
                placeholder="Search bus stops..."
                ref={secondInputRef}
                onFocus={() => {
                  if (secondInputRef?.current) {
                    secondInputRef?.current?.select();
                  }
                }}
                value={secondQuery?.display_name}
                onChange={(e) => {
                  secondQueryOnchange(e);
                }}
                className="w-full h-full p-2 border border-none focus:outline-none text-[12px] rounded-md shadow-sm focus:ring-[1px] focus:ring-blue-500 "
              />
              <div className=" w-full z-[500] absolute h-fit  overflow-auto">
                <ul className="flex flex-col pt-4 ">
                  {secondlist.map((stop) => (
                    <button
                      onClick={() => {
                        setsecondQuery({
                          _id: stop?._id,
                          display_name: stop.bus_stop_display_name,
                        });
                        //   setIsFirstPicked(true);
                        setsecondList([]);
                      }}
                      key={stop.id}
                      className="p-2 text-[10px] bg-gray-100 text-start rounded-md shadow-sm hover:bg-gray-200 transition"
                    >
                      {stop.bus_stop_display_name}
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* ------------------------- */}
        </div>

        <div className=" w-full justify-center flex flex-row gap-[1rem]">
          <button
            onClick={() => {
              // navigate(page_routes?.bus_stop_add?.direct_link);
            }}
            className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-[12px]"
          >
            Connect
          </button>
          <button
            onClick={() => {
              console.log("button click");
              let obj = firstQuery;
              setfirstQuery(secondQuery);
              setsecondQuery(obj);
            }}
            className=" px-4 py-2  bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-[12px]"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectComponent;
