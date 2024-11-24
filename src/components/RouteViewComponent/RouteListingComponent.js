import React from "react";
import RouteListIndivComponent from "./Utils/RouteListIndivComponent";

const array = [
  {
    stop_name: "Kalapatti",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "	5:45 AM",
  },
  {
    stop_name: "Lakshmi Technology",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:47 AM",
  },
  {
    stop_name: "KMCH College of Pharmacy",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:50 AM",
  },
  {
    stop_name: "N.G.P. College",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:52 AM",
  },
  {
    stop_name: "Periyar Nagar",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:53 AM",
  },
  {
    stop_name: "Nehru Nagar",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:55 AM",
  },
  {
    stop_name: "SITRA Airport",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:00 AM",
  },
  {
    stop_name: "Arvind Eye Hospital",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:01 AM",
  },
  {
    stop_name: "Codissia",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:03 AM",
  },
  {
    stop_name: "	Hope College",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:07 AM",
  },
  {
    stop_name: "Varatharaja Mills",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:09 AM",
  },
  {
    stop_name: "Fun Mall",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:10 AM",
  },
  {
    stop_name: "Krishnamal College",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:12 AM",
  },
  {
    stop_name: "P.S.G. Tech / Peelamedu",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:14 AM",
  },
  {
    stop_name: "Suguna Kalyana Mandapam	",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:16 AM",
  },
  {
    stop_name: "Nava India",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:18 AM",
  },
  {
    stop_name: "Lakshmi Mills",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:21 AM",
  },
  {
    stop_name: "GKNM Hospital",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:22 AM",
  },
  {
    stop_name: "Anna Statue",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:26 AM",
  },
  {
    stop_name: "V.O.C. Park",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:27 AM",
  },
  {
    stop_name: "C.S.I. School",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:28 AM",
  },
  {
    stop_name: "C.S.I. Immanuel Church",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:29 AM",
  },
  {
    stop_name: "D.S.P. Office",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:29 AM",
  },
  {
    stop_name: "Collector Office",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:30 AM",
  },
  {
    stop_name: "Railway Station",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:30 AM",
  },
  {
    stop_name: "Town Hall",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:33 AM",
  },
  {
    stop_name: "Prakasam",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:34 AM",
  },
  {
    stop_name: "Oppanakara Street Bus Stop",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:35 AM",
  },
  {
    stop_name: "Sukrawarpet",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:37 AM",
  },
  {
    stop_name: "Mahali Amman Koil / Flower Market",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:38 AM",
  },
  {
    stop_name: "Poomarket",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:39 AM",
  },
  {
    stop_name: "Navratna Hotel",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:41 AM",
  },
  {
    stop_name: "North Coimbatore",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:42 AM",
  },
  {
    stop_name: "T.V.S.",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:44 AM",
  },
  {
    stop_name: "Murugan Mills",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:46 AM",
  },
  {
    stop_name: "Puliyamaram",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:47 AM",
  },
  {
    stop_name: "Saibaba Colony",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:48 AM",
  },
];

const RouteListingComponent = () => {
  return (
    <div className=" flex flex-col mt-[1rem] gap-[0.5rem] border-b-2 rounded-[2rem] mb-[5rem]">
      {array?.map((item, index) => {
        return (
          <RouteListIndivComponent
            content={item}
            isLast={index === array?.length - 1}
          />
        );
      })}
    </div>
  );
};

export default RouteListingComponent;
